/*
  Warnings:

  - You are about to drop the `GpsPostion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GpsPostion" DROP CONSTRAINT "GpsPostion_addressId_fkey";

-- DropTable
DROP TABLE "GpsPostion";

-- CreateTable
CREATE TABLE "Postion" (
    "id" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "addressId" INTEGER NOT NULL,

    CONSTRAINT "Postion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Postion_addressId_key" ON "Postion"("addressId");

-- AddForeignKey
ALTER TABLE "Postion" ADD CONSTRAINT "Postion_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "StationAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
