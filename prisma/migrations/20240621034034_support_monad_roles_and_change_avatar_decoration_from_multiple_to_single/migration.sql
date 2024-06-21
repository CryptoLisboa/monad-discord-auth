/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `AvatarDecoration` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "MonadRoles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "roles" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MonadRoles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MonadRoles_userId_key" ON "MonadRoles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AvatarDecoration_userId_key" ON "AvatarDecoration"("userId");

-- AddForeignKey
ALTER TABLE "MonadRoles" ADD CONSTRAINT "MonadRoles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
