-- CreateTable
CREATE TABLE "Vessel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rs" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "stationId" INTEGER,
    "classId" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "Vessel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VesselType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "VesselType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VesselStateCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inUse" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "VesselStateCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VesselState" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inUse" BOOLEAN NOT NULL DEFAULT true,
    "stateCategoryId" INTEGER NOT NULL,

    CONSTRAINT "VesselState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VesselCapability" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "VesselCapability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VesselClass" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "range" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,

    CONSTRAINT "VesselClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Station" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tilFelt" TEXT,
    "address" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "postalLocation" TEXT NOT NULL,
    "postalBox" INTEGER,
    "postalDelivery" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StationType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "StationType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StationAccommodation" (
    "id" SERIAL NOT NULL,
    "typeId" INTEGER NOT NULL,
    "description" TEXT,
    "address" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "postalLocation" TEXT NOT NULL,
    "postalBox" INTEGER,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "stationId" INTEGER NOT NULL,

    CONSTRAINT "StationAccommodation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StationAccommodationType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "StationAccommodationType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StationAgreement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "StationAgreement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StationAgreementType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "StationAgreementType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_VesselToVesselCapability" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_StationToStationAgreement" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Vessel_name_key" ON "Vessel"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Vessel_rs_key" ON "Vessel"("rs");

-- CreateIndex
CREATE UNIQUE INDEX "VesselType_name_key" ON "VesselType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VesselStateCategory_name_key" ON "VesselStateCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VesselState_name_key" ON "VesselState"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VesselCapability_name_key" ON "VesselCapability"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VesselClass_name_key" ON "VesselClass"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Station_name_key" ON "Station"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StationType_name_key" ON "StationType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StationAccommodation_stationId_key" ON "StationAccommodation"("stationId");

-- CreateIndex
CREATE UNIQUE INDEX "StationAccommodationType_name_key" ON "StationAccommodationType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StationAgreement_name_key" ON "StationAgreement"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StationAgreementType_name_key" ON "StationAgreementType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_VesselToVesselCapability_AB_unique" ON "_VesselToVesselCapability"("A", "B");

-- CreateIndex
CREATE INDEX "_VesselToVesselCapability_B_index" ON "_VesselToVesselCapability"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_StationToStationAgreement_AB_unique" ON "_StationToStationAgreement"("A", "B");

-- CreateIndex
CREATE INDEX "_StationToStationAgreement_B_index" ON "_StationToStationAgreement"("B");

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "VesselType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_classId_fkey" FOREIGN KEY ("classId") REFERENCES "VesselClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "VesselState"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VesselState" ADD CONSTRAINT "VesselState_stateCategoryId_fkey" FOREIGN KEY ("stateCategoryId") REFERENCES "VesselStateCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Station" ADD CONSTRAINT "Station_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "StationType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StationAccommodation" ADD CONSTRAINT "StationAccommodation_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "StationAccommodationType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StationAccommodation" ADD CONSTRAINT "StationAccommodation_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StationAgreement" ADD CONSTRAINT "StationAgreement_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "StationAgreementType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VesselToVesselCapability" ADD CONSTRAINT "_VesselToVesselCapability_A_fkey" FOREIGN KEY ("A") REFERENCES "Vessel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VesselToVesselCapability" ADD CONSTRAINT "_VesselToVesselCapability_B_fkey" FOREIGN KEY ("B") REFERENCES "VesselCapability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StationToStationAgreement" ADD CONSTRAINT "_StationToStationAgreement_A_fkey" FOREIGN KEY ("A") REFERENCES "Station"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StationToStationAgreement" ADD CONSTRAINT "_StationToStationAgreement_B_fkey" FOREIGN KEY ("B") REFERENCES "StationAgreement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
