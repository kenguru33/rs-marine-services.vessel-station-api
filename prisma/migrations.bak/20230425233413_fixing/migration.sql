/*
  Warnings:

  - You are about to drop the column `typeId` on the `StationAddress` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stationId]` on the table `StationAddress` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stationAddressTypeId]` on the table `StationAddress` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `stationAddressTypeId` to the `StationAddress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StationAddress" DROP COLUMN "typeId",
ADD COLUMN     "stationAddressTypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "StationAddressType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "StationAddressType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StationAddressType_name_key" ON "StationAddressType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StationAddress_stationId_key" ON "StationAddress"("stationId");

-- CreateIndex
CREATE UNIQUE INDEX "StationAddress_stationAddressTypeId_key" ON "StationAddress"("stationAddressTypeId");

-- AddForeignKey
ALTER TABLE "StationAddress" ADD CONSTRAINT "StationAddress_stationAddressTypeId_fkey" FOREIGN KEY ("stationAddressTypeId") REFERENCES "StationAddressType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
