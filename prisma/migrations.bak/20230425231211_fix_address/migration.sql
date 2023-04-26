/*
  Warnings:

  - Made the column `stationAddressTypeId` on table `StationAddress` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "StationAddress" DROP CONSTRAINT "StationAddress_stationAddressTypeId_fkey";

-- AlterTable
ALTER TABLE "StationAddress" ALTER COLUMN "stationAddressTypeId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "StationAddress" ADD CONSTRAINT "StationAddress_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "StationAddressType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
