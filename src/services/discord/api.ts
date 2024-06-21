import { Guild } from "./types";
import { GuildMember } from "./types";

const account = {
  token_type: "bearer",
  access_token: "XpsTMGVg0Ms3NNr9qSemJrtyW3qj6E",
  expires_in: 604800,
  refresh_token: "Kv9zvrauyJqMxF6LMt1GEjlt6bfWPt",
  scope: "guilds guilds.members.read email identify",
  expires_at: 1719529829,
  provider: "discord",
  type: "oauth",
  providerAccountId: "613126953829924896",
};

const guild_user = {
  avatar: null,
  communication_disabled_until: "2024-05-27T02:59:33.166000+00:00",
  flags: 0,
  joined_at: "2024-05-08T13:36:42.764000+00:00",
  nick: null,
  pending: false,
  premium_since: null,
  roles: ["1072682201658970112", "1148702047751913482", "1194380090964988005"],
  unusual_dm_activity_until: null,
  user: {
    id: "613126953829924896",
    username: "cryptolisboa",
    avatar: "9e722ab51c74fff2bbffd5ec6949136c",
    discriminator: "0",
    public_flags: 0,
    flags: 0,
    banner: "44a4a2808795dfbf188a749793284fd8",
    accent_color: null,
    global_name: "Ben 💻⛏",
    avatar_decoration_data: {
      asset: "a_10b9f886b513b77ccdd67c8784f1a496",
      sku_id: "1144059132517826601",
    },
    banner_color: null,
    clan: null,
  },
  mute: true,
  deaf: false,
  bio: "",
  banner: null,
};

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

const MONAD_SERVER_ID = "1036357772826120242";

export const fetchGuildMember = async (
  accessToken: string,
  userId: string,
): Promise<GuildMember | undefined> => {
  // {{baseUrl}}/users/@me/guilds/:guild_id/member
  const url = `https://discord.com/api/v10/users/@me/guilds/${MONAD_SERVER_ID}/member`;
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
