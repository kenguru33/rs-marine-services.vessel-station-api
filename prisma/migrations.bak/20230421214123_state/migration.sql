-- CreateTable
CREATE TABLE "Vessel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rs" INTEGER NOT NULL,
    "stationId" INTEGER,
    "classId" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "Vessel_pkey" PRIMARY KEY ("id")
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

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_VesselToVesselCapability" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Vessel_name_key" ON "Vessel"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Vessel_rs_key" ON "Vessel"("rs");

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
CREATE UNIQUE INDEX "_VesselToVesselCapability_AB_unique" ON "_VesselToVesselCapability"("A", "B");

-- CreateIndex
CREATE INDEX "_VesselToVesselCapability_B_index" ON "_VesselToVesselCapability"("B");

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_classId_fkey" FOREIGN KEY ("classId") REFERENCES "VesselClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "VesselState"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VesselState" ADD CONSTRAINT "VesselState_stateCategoryId_fkey" FOREIGN KEY ("stateCategoryId") REFERENCES "VesselStateCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VesselToVesselCapability" ADD CONSTRAINT "_VesselToVesselCapability_A_fkey" FOREIGN KEY ("A") REFERENCES "Vessel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VesselToVesselCapability" ADD CONSTRAINT "_VesselToVesselCapability_B_fkey" FOREIGN KEY ("B") REFERENCES "VesselCapability"("id") ON DELETE CASCADE ON UPDATE CASCADE;
