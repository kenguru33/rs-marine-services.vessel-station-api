/*
  Warnings:

  - A unique constraint covering the columns `[LegacyStateId]` on the table `State` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "State" ADD COLUMN     "InUse" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "LegacyStateId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "State_LegacyStateId_key" ON "State"("LegacyStateId");
