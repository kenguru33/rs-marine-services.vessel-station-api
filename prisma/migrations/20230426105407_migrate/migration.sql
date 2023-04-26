/*
  Warnings:

  - You are about to drop the column `deliveryTypeId` on the `Station` table. All the data in the column will be lost.
  - You are about to drop the `StationDeliveryType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Station" DROP CONSTRAINT "Station_deliveryTypeId_fkey";

-- AlterTable
ALTER TABLE "Station" DROP COLUMN "deliveryTypeId",
ADD COLUMN     "postalDelivery" TEXT;

-- DropTable
DROP TABLE "StationDeliveryType";
