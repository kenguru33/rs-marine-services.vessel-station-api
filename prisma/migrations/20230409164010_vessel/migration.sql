/*
  Warnings:

  - Made the column `stateId` on table `Vessel` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Vessel" DROP CONSTRAINT "Vessel_stateId_fkey";

-- AlterTable
ALTER TABLE "Vessel" ALTER COLUMN "stateId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "VesselState"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
