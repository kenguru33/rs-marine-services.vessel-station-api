/*
  Warnings:

  - You are about to drop the column `address` on the `Station` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `Station` table. All the data in the column will be lost.
  - You are about to drop the column `zipLocation` on the `Station` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Station" DROP COLUMN "address",
DROP COLUMN "zipCode",
DROP COLUMN "zipLocation";

-- CreateTable
CREATE TABLE "StationAddress" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "zipLocation" TEXT NOT NULL,
    "stationId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "StationAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StationAddressType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "StationAddressType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StationAddress_stationId_key" ON "StationAddress"("stationId");

-- CreateIndex
CREATE UNIQUE INDEX "StationAddressType_name_key" ON "StationAddressType"("name");

-- AddForeignKey
ALTER TABLE "StationAddress" ADD CONSTRAINT "StationAddress_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StationAddress" ADD CONSTRAINT "StationAddress_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "StationAddressType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
