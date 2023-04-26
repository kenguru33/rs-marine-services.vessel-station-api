/*
  Warnings:

  - You are about to drop the `GpsPostion` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `latitide` to the `StationAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `StationAddress` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GpsPostion" DROP CONSTRAINT "GpsPostion_addressId_fkey";

-- AlterTable
ALTER TABLE "StationAddress" ADD COLUMN     "latitide" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "GpsPostion";
