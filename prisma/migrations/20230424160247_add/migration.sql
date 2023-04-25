-- AlterTable
ALTER TABLE "Station" ADD COLUMN     "address" TEXT,
ADD COLUMN     "zipCode" TEXT,
ADD COLUMN     "zipLocation" TEXT;

-- CreateTable
CREATE TABLE "StationLocation" (
    "id" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "stationId" INTEGER NOT NULL,

    CONSTRAINT "StationLocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StationLocation_stationId_key" ON "StationLocation"("stationId");

-- AddForeignKey
ALTER TABLE "StationLocation" ADD CONSTRAINT "StationLocation_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
