/*
  Warnings:

  - You are about to drop the column `stationAddressTypeId` on the `StationAddress` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `StationAddress` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StationAddress" DROP CONSTRAINT "StationAddress_stationAddressTypeId_fkey";

-- DropIndex
DROP INDEX "StationAddress_stationAddressTypeId_key";

-- AlterTable
ALTER TABLE "StationAddress" DROP COLUMN "stationAddressTypeId",
ADD COLUMN     "typeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "StationAddress" ADD CONSTRAINT "StationAddress_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "StationAddressType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
