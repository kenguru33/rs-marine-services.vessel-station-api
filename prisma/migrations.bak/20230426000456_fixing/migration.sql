/*
  Warnings:

  - You are about to drop the column `typeId` on the `StationAddress` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stationId]` on the table `StationAddress` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `stationId` to the `StationAddress` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StationAddress" DROP CONSTRAINT "StationAddress_typeId_fkey";

-- AlterTable
ALTER TABLE "StationAddress" DROP COLUMN "typeId",
ADD COLUMN     "stationId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "StationAddress_stationId_key" ON "StationAddress"("stationId");

-- AddForeignKey
ALTER TABLE "StationAddress" ADD CONSTRAINT "StationAddress_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
