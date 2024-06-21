import { prisma } from "@/services/db/prisma";

interface UserArgs {
  userId: string;
  include?: {
    MonadRoles?: boolean;
    accounts?: boolean;
  };
}

export async function getUser({ userId, include }: UserArgs) {
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
