-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accent_color" INTEGER,
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "avatar_decoration_data" JSONB,
ADD COLUMN     "banner" TEXT,
ADD COLUMN     "banner_color" TEXT,
ADD COLUMN     "clan" TEXT,
ADD COLUMN     "discriminator" TEXT,
ADD COLUMN     "flags" INTEGER,
ADD COLUMN     "global_name" TEXT,
ADD COLUMN     "locale" TEXT,
ADD COLUMN     "mfa_enabled" BOOLEAN,
ADD COLUMN     "premium_type" INTEGER,
ADD COLUMN     "public_flags" INTEGER,
ADD COLUMN     "verified" BOOLEAN;

-- CreateTable
CREATE TABLE "AvatarDecoration" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "asset" TEXT NOT NULL,
    "sku_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AvatarDecoration_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AvatarDecoration" ADD CONSTRAINT "AvatarDecoration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
