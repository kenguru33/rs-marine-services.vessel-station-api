/*
  Warnings:

  - You are about to drop the column `stateId` on the `Vessel` table. All the data in the column will be lost.
  - Added the required column `subStateId` to the `Vessel` table without a default value. This is not possible if the table is not empty.
  - Made the column `parentStateId` on table `VesselSubState` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Vessel" DROP CONSTRAINT "Vessel_stateId_fkey";

-- DropForeignKey
ALTER TABLE "VesselSubState" DROP CONSTRAINT "VesselSubState_parentStateId_fkey";

-- AlterTable
ALTER TABLE "Vessel" DROP COLUMN "stateId",
ADD COLUMN     "subStateId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "VesselSubState" ALTER COLUMN "parentStateId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_subStateId_fkey" FOREIGN KEY ("subStateId") REFERENCES "VesselSubState"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VesselSubState" ADD CONSTRAINT "VesselSubState_parentStateId_fkey" FOREIGN KEY ("parentStateId") REFERENCES "VesselState"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
