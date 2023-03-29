/*
  Warnings:

  - You are about to drop the column `stateId` on the `VesselSubState` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[parentStateId]` on the table `VesselSubState` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "VesselSubState" DROP CONSTRAINT "VesselSubState_stateId_fkey";

-- DropIndex
DROP INDEX "VesselSubState_stateId_key";

-- AlterTable
ALTER TABLE "VesselSubState" DROP COLUMN "stateId",
ADD COLUMN     "parentStateId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "VesselSubState_parentStateId_key" ON "VesselSubState"("parentStateId");

-- AddForeignKey
ALTER TABLE "VesselSubState" ADD CONSTRAINT "VesselSubState_parentStateId_fkey" FOREIGN KEY ("parentStateId") REFERENCES "VesselState"("id") ON DELETE SET NULL ON UPDATE CASCADE;
