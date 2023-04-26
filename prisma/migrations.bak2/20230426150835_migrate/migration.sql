/*
  Warnings:

  - You are about to drop the column `name` on the `StationApartment` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "StationApartment_name_key";

-- AlterTable
ALTER TABLE "StationApartment" DROP COLUMN "name";
