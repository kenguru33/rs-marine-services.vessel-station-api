/*
  Warnings:

  - Made the column `vesselClassId` on table `Vessel` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Vessel" DROP CONSTRAINT "Vessel_vesselClassId_fkey";

-- AlterTable
ALTER TABLE "Vessel" ALTER COLUMN "vesselClassId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_vesselClassId_fkey" FOREIGN KEY ("vesselClassId") REFERENCES "VesselClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
