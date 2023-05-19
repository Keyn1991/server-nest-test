/*
  Warnings:

  - You are about to drop the `Listing` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `carId` to the `Advertisement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `Advertisement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Advertisement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Advertisement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Advertisement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Advertisement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Listing" DROP CONSTRAINT "Listing_carId_fkey";

-- DropForeignKey
ALTER TABLE "Listing" DROP CONSTRAINT "Listing_ownerId_fkey";

-- AlterTable
ALTER TABLE "Advertisement" ADD COLUMN     "carId" INTEGER NOT NULL,
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "ownerId" INTEGER NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "Listing";

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
