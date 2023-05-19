/*
  Warnings:

  - The primary key for the `roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `roles` table. All the data in the column will be lost.
  - The required column `id` was added to the `roles` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- CreateEnum
CREATE TYPE "RoleValue" AS ENUM ('BUYER', 'SELLER', 'MANAGER', 'ADMINISTRATOR');

-- AlterTable
ALTER TABLE "roles" DROP CONSTRAINT "roles_pkey",
DROP COLUMN "name",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "value" "RoleValue" NOT NULL DEFAULT 'BUYER',
ADD CONSTRAINT "roles_pkey" PRIMARY KEY ("id");
