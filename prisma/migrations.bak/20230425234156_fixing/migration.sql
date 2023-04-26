/*
  Warnings:

  - A unique constraint covering the columns `[typeId]` on the table `StationAddress` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "StationAddress_typeId_key" ON "StationAddress"("typeId");
