/*
  Warnings:

  - You are about to drop the `StationLocation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StationLocation" DROP CONSTRAINT "StationLocation_stationId_fkey";

-- DropTable
DROP TABLE "StationLocation";

-- CreateTable
CREATE TABLE "GpsPostion" (
    "id" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "addressId" INTEGER NOT NULL,

    CONSTRAINT "GpsPostion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GpsPostion_addressId_key" ON "GpsPostion"("addressId");

-- AddForeignKey
ALTER TABLE "GpsPostion" ADD CONSTRAINT "GpsPostion_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "StationAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
