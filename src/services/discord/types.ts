export interface Guild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: string[];
}

export interface Account {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  expires_at: number;
  provider: string;
  type: string;
  providerAccountId: string;
}

export interface GuildMember {
  avatar: string | null;
  communication_disabled_until: string | null;
  flags: number;
  joined_at: string;
  nick: string | null;
  pending: boolean;
  premium_since: string | null;
  roles: string[];
  unusual_dm_activity_until: string | null;
  user: User;
  mute: boolean;
  deaf: boolean;
  bio: string;
  banner: string | null;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: string;
  accent_color: string | null;
  global_name: string;
  avatar_decoration_data: AvatarDecorationData;
  banner_color: string | null;
  clan: string | null;
}

export interface AvatarDecorationData {
  asset: string;
  sku_id: string;
}
