"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { GuildMember } from "@/services/discord/types";

export default function HomeComponent({
  session,
  userIsPartOfMonad,
  userGuildMember,
}: {
  session: Session | null;
  userIsPartOfMonad: boolean;
  userGuildMember: GuildMember | undefined;
}) {
  const roles = userGuildMember?.roles;
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex lg:flex-col">
      {session ? (
        <>
          Signed in as {session?.user?.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
          <h2>
            {userIsPartOfMonad
              ? "You are part of Monad"
              : "You are not part of Monad yet, please join the discord"}
          </h2>
          {userIsPartOfMonad && (
            <>
              <h3>These are your roles:</h3>
              <div>{roles?.map((role) => <div key={role}>{role}</div>)}</div>
            </>
          )}
        </>
      ) : (
        <>
          <div>Not signed in</div>
          <button onClick={() => signIn()}>Click me to Sign in</button>
        </>
      )}
    </div>
  );
}
