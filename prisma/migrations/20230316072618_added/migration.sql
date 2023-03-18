/*
  Warnings:

  - Added the required column `range` to the `VesselClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speed` to the `VesselClass` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VesselClass" ADD COLUMN     "range" INTEGER NOT NULL,
ADD COLUMN     "speed" INTEGER NOT NULL;
