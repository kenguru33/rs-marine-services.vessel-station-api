/*
  Warnings:

  - You are about to drop the column `parentStateId` on the `VesselSubState` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `VesselSubState` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "VesselSubState" DROP CONSTRAINT "VesselSubState_parentStateId_fkey";

-- AlterTable
ALTER TABLE "VesselSubState" DROP COLUMN "parentStateId",
ADD COLUMN     "vesselStateId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "VesselSubState_name_key" ON "VesselSubState"("name");

-- AddForeignKey
ALTER TABLE "VesselSubState" ADD CONSTRAINT "VesselSubState_vesselStateId_fkey" FOREIGN KEY ("vesselStateId") REFERENCES "VesselState"("id") ON DELETE SET NULL ON UPDATE CASCADE;
