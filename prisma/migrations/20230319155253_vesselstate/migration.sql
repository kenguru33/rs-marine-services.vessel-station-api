/*
  Warnings:

  - A unique constraint covering the columns `[vesselStateId,name]` on the table `VesselSubState` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "VesselSubState_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "VesselSubState_vesselStateId_name_key" ON "VesselSubState"("vesselStateId", "name");
