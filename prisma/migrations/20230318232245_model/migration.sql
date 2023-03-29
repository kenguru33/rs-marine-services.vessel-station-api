/*
  Warnings:

  - You are about to drop the column `vesselClassId` on the `Vessel` table. All the data in the column will be lost.
  - You are about to drop the `Capability` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `State` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubState` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CapabilityToVessel` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `classId` to the `Vessel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SubState" DROP CONSTRAINT "SubState_stateId_fkey";

-- DropForeignKey
ALTER TABLE "Vessel" DROP CONSTRAINT "Vessel_stateId_fkey";

-- DropForeignKey
ALTER TABLE "Vessel" DROP CONSTRAINT "Vessel_vesselClassId_fkey";

-- DropForeignKey
ALTER TABLE "_CapabilityToVessel" DROP CONSTRAINT "_CapabilityToVessel_A_fkey";

-- DropForeignKey
ALTER TABLE "_CapabilityToVessel" DROP CONSTRAINT "_CapabilityToVessel_B_fkey";

-- AlterTable
ALTER TABLE "Vessel" DROP COLUMN "vesselClassId",
ADD COLUMN     "classId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Capability";

-- DropTable
DROP TABLE "State";

-- DropTable
DROP TABLE "SubState";

-- DropTable
DROP TABLE "_CapabilityToVessel";

-- CreateTable
CREATE TABLE "VesselState" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "legacyStateId" INTEGER,
    "inUse" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "VesselState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VesselSubState" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "legacyStateId" INTEGER,
    "inUse" BOOLEAN NOT NULL DEFAULT true,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "VesselSubState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VesselCapability" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "VesselCapability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_VesselToVesselCapability" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "VesselState_name_key" ON "VesselState"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VesselState_legacyStateId_key" ON "VesselState"("legacyStateId");

-- CreateIndex
CREATE UNIQUE INDEX "VesselSubState_name_key" ON "VesselSubState"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VesselSubState_legacyStateId_key" ON "VesselSubState"("legacyStateId");

-- CreateIndex
CREATE UNIQUE INDEX "VesselCapability_name_key" ON "VesselCapability"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_VesselToVesselCapability_AB_unique" ON "_VesselToVesselCapability"("A", "B");

-- CreateIndex
CREATE INDEX "_VesselToVesselCapability_B_index" ON "_VesselToVesselCapability"("B");

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_classId_fkey" FOREIGN KEY ("classId") REFERENCES "VesselClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "VesselState"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VesselSubState" ADD CONSTRAINT "VesselSubState_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "VesselState"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VesselToVesselCapability" ADD CONSTRAINT "_VesselToVesselCapability_A_fkey" FOREIGN KEY ("A") REFERENCES "Vessel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VesselToVesselCapability" ADD CONSTRAINT "_VesselToVesselCapability_B_fkey" FOREIGN KEY ("B") REFERENCES "VesselCapability"("id") ON DELETE CASCADE ON UPDATE CASCADE;
