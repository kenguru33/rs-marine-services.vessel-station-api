/*
  Warnings:

  - You are about to drop the column `postLocation` on the `StationAddress` table. All the data in the column will be lost.
  - Added the required column `postalLocation` to the `StationAddress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StationAddress" DROP COLUMN "postLocation",
ADD COLUMN     "postalLocation" TEXT NOT NULL;
