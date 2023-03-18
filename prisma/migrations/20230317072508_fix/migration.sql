/*
  Warnings:

  - You are about to drop the column `InUse` on the `State` table. All the data in the column will be lost.
  - You are about to drop the column `LegacyStateId` on the `State` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[legacyStateId]` on the table `State` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "State_LegacyStateId_key";

-- AlterTable
ALTER TABLE "State" DROP COLUMN "InUse",
DROP COLUMN "LegacyStateId",
ADD COLUMN     "inUse" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "legacyStateId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "State_legacyStateId_key" ON "State"("legacyStateId");
