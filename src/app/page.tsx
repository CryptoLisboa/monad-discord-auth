import React from "react";
import { auth } from "@/services/auth";
import HomeComponent from "./components/Home";
import { getUser } from "@/services/db/api/user";
import { fetchGuildMember, fetchGuilds } from "@/services/discord/api";
import { GuildMember } from "@/services/discord/types";

export default async function Home() {
  const session = await auth();
  console.log("session: ", JSON.stringify(session, null, 2));
  let user = null;
  let userIsPartOfMonad = false;
  let userGuildMember: GuildMember | undefined = undefined;
  try {
    const res = await getUser({
      userId: session?.user?.id!,
      include: { MonadRoles: true, accounts: true },
    });
    user = res;
    if (!user.MonadRoles) {
      const userGuilds = await fetchGuilds(user?.accounts[0]?.access_token);
      userIsPartOfMonad = !!userGuilds?.some(
        (guild) => guild.id === process.env.MONAD_GUILD_ID,
      );
      if (userIsPartOfMonad) {
        userGuildMember = await fetchGuildMember(
          user?.accounts[0]?.access_token,
        );
        console.log("userGuildMember: ", userGuildMember);
      }
    }
  } catch (error) {
    console.error("Error fetching user: ", error);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeComponent
        session={session}
        userIsPartOfMonad={userIsPartOfMonad}
        userGuildMember={userGuildMember}
      />
    </main>
  );
}
