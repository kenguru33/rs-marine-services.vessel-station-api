/*
  Warnings:

  - You are about to drop the column `stationId` on the `StationAddress` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "StationAddress" DROP CONSTRAINT "StationAddress_stationId_fkey";

-- DropIndex
DROP INDEX "StationAddress_stationId_key";

-- DropIndex
DROP INDEX "StationAddress_typeId_key";

-- AlterTable
ALTER TABLE "StationAddress" DROP COLUMN "stationId";
