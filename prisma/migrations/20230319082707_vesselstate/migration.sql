/*
  Warnings:

  - A unique constraint covering the columns `[stateId]` on the table `VesselSubState` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VesselSubState_stateId_key" ON "VesselSubState"("stateId");
