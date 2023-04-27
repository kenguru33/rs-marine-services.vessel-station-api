/*
  Warnings:

  - A unique constraint covering the columns `[stationId]` on the table `StationPier` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `stationId` to the `StationPier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StationPier" ADD COLUMN     "stationId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "StationPier_stationId_key" ON "StationPier"("stationId");

-- AddForeignKey
ALTER TABLE "StationPier" ADD CONSTRAINT "StationPier_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
