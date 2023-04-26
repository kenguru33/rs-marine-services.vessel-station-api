/*
  Warnings:

  - You are about to drop the column `zipCode` on the `StationAddress` table. All the data in the column will be lost.
  - You are about to drop the column `zipLocation` on the `StationAddress` table. All the data in the column will be lost.
  - Added the required column `postLocation` to the `StationAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `StationAddress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StationAddress" DROP COLUMN "zipCode",
DROP COLUMN "zipLocation",
ADD COLUMN     "postLocation" TEXT NOT NULL,
ADD COLUMN     "postalBox" INTEGER,
ADD COLUMN     "postalCode" TEXT NOT NULL;
