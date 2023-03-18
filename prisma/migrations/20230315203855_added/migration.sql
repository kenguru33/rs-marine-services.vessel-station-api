-- AlterTable
ALTER TABLE "Vessel" ADD COLUMN     "vesselClassId" INTEGER;

-- CreateTable
CREATE TABLE "VesselClass" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "VesselClass_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VesselClass_name_key" ON "VesselClass"("name");

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_vesselClassId_fkey" FOREIGN KEY ("vesselClassId") REFERENCES "VesselClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;
