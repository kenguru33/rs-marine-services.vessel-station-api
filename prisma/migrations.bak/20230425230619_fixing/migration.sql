-- DropForeignKey
ALTER TABLE "StationAddress" DROP CONSTRAINT "StationAddress_typeId_fkey";

-- DropIndex
DROP INDEX "StationAddress_stationId_key";

-- AlterTable
ALTER TABLE "StationAddress" ADD COLUMN     "stationAddressTypeId" INTEGER;

-- AddForeignKey
ALTER TABLE "StationAddress" ADD CONSTRAINT "StationAddress_stationAddressTypeId_fkey" FOREIGN KEY ("stationAddressTypeId") REFERENCES "StationAddressType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
