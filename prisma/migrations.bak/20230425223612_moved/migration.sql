/*
  Warnings:

  - You are about to drop the column `latitide` on the `StationAddress` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `StationAddress` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StationAddress" DROP COLUMN "latitide",
DROP COLUMN "longitude";

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
