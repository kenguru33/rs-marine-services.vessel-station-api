/*
  Warnings:

  - You are about to drop the `StationAddress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StationAddressType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `Station` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryTypeId` to the `Station` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `Station` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Station` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `Station` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalLocation` to the `Station` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `Station` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `Vessel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StationAddress" DROP CONSTRAINT "StationAddress_stationId_fkey";

-- AlterTable
ALTER TABLE "Station" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "apartmentId" INTEGER,
ADD COLUMN     "deliveryTypeId" INTEGER NOT NULL,
ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "postalBox" INTEGER,
ADD COLUMN     "postalCode" TEXT NOT NULL,
ADD COLUMN     "postalLocation" TEXT NOT NULL,
ADD COLUMN     "tilFelt" TEXT,
ADD COLUMN     "typeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Vessel" ADD COLUMN     "typeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "StationAddress";

-- DropTable
DROP TABLE "StationAddressType";

-- CreateTable
CREATE TABLE "VesselType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "VesselType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StationApartment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "address" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "postalLocation" TEXT NOT NULL,
    "postalBox" INTEGER,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "StationApartment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StationDeliveryType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "StationDeliveryType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StationType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "StationType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VesselType_name_key" ON "VesselType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StationApartment_name_key" ON "StationApartment"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StationDeliveryType_name_key" ON "StationDeliveryType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StationType_name_key" ON "StationType"("name");

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "VesselType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Station" ADD CONSTRAINT "Station_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "StationApartment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Station" ADD CONSTRAINT "Station_deliveryTypeId_fkey" FOREIGN KEY ("deliveryTypeId") REFERENCES "StationDeliveryType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Station" ADD CONSTRAINT "Station_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "StationType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
