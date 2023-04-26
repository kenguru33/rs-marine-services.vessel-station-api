/*
  Warnings:

  - A unique constraint covering the columns `[stationId]` on the table `StationAccommodation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "StationAccommodation_stationId_key" ON "StationAccommodation"("stationId");
