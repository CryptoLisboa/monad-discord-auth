import { Account, AvatarDecorationData } from "@/services/discord/types";

// Define an extended user type that includes relations
export interface ExtendedUser {
  id: string;
  name: string | null;
  username: string | null;
  avatar: string | null;
  discriminator: string | null;
  public_flags: number | null;
  flags: number | null;
  banner: string | null;
  accent_color: number | null;
  global_name: string | null;
  avatar_decoration_data?: AvatarDecorationData;
  banner_color: string | null;
  clan: string | null;
  mfa_enabled: boolean | null;
  locale: string | null;
  premium_type: number | null;
  email: string;
  verified: boolean | null;
  emailVerified: Date | null;
  image: string | null;
  accounts?: Account[]; // Ensure this matches the type from your Prisma model
  MonadRoles?: {
    id: string;
    userId: string;
    roles: string[];
    createdAt: Date;
    updatedAt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}
