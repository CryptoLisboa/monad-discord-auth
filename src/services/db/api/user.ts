import { prisma } from "@/services/db/prisma";
import { ExtendedUser } from "@/types/user";

interface UserArgs {
  userId: string;
  include?: {
    MonadRoles?: boolean;
    accounts?: boolean;
  };
}

export async function getUser({
  userId,
  include,
}: UserArgs): Promise<ExtendedUser> {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: include,
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}
