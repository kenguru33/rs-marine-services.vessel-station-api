/*
  Warnings:

  - You are about to drop the column `stationAddressTypeId` on the `StationAddress` table. All the data in the column will be lost.
  - You are about to drop the `Postion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StationAddressType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Postion" DROP CONSTRAINT "Postion_addressId_fkey";

-- DropForeignKey
ALTER TABLE "StationAddress" DROP CONSTRAINT "StationAddress_typeId_fkey";

-- AlterTable
ALTER TABLE "StationAddress" DROP COLUMN "stationAddressTypeId";

-- DropTable
DROP TABLE "Postion";

-- DropTable
DROP TABLE "StationAddressType";
