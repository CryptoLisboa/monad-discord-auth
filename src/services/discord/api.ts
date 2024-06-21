import { Guild } from "./types";
import { GuildMember } from "./types";

export const fetchGuilds = async (
  accessToken: string,
): Promise<Guild[] | undefined> => {
  const url = "https://discord.com/api/v10/users/@me/guilds";
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data as Guild[];
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const fetchGuildMember = async (
  accessToken: string,
): Promise<GuildMember | undefined> => {
  const url = `https://discord.com/api/v10/users/@me/guilds/${process.env.MONAD_DISCORD_SERVER_ID}/member`;
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as GuildMember;
  } catch (error) {
    console.error("Failed to fetch guild member:", error);
    return undefined;
  }
};
