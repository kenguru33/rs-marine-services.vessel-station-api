/*
  Warnings:

  - You are about to drop the column `apartmentId` on the `Station` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stationId]` on the table `StationApartment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `stationId` to the `StationApartment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Station" DROP CONSTRAINT "Station_apartmentId_fkey";

-- AlterTable
ALTER TABLE "Station" DROP COLUMN "apartmentId";

-- AlterTable
ALTER TABLE "StationApartment" ADD COLUMN     "stationId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "StationApartment_stationId_key" ON "StationApartment"("stationId");

-- AddForeignKey
ALTER TABLE "StationApartment" ADD CONSTRAINT "StationApartment_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
