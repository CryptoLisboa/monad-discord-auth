/*
  Warnings:

  - You are about to drop the `AvatarDecoration` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AvatarDecoration" DROP CONSTRAINT "AvatarDecoration_userId_fkey";

-- DropTable
DROP TABLE "AvatarDecoration";
