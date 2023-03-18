-- CreateTable
CREATE TABLE "Vessel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rs" INTEGER NOT NULL,
    "stationId" INTEGER,

    CONSTRAINT "Vessel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Capability" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Capability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Station" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CapabilityToVessel" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Vessel_name_key" ON "Vessel"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Vessel_rs_key" ON "Vessel"("rs");

-- CreateIndex
CREATE UNIQUE INDEX "Capability_name_key" ON "Capability"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Station_name_key" ON "Station"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CapabilityToVessel_AB_unique" ON "_CapabilityToVessel"("A", "B");

-- CreateIndex
CREATE INDEX "_CapabilityToVessel_B_index" ON "_CapabilityToVessel"("B");

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CapabilityToVessel" ADD CONSTRAINT "_CapabilityToVessel_A_fkey" FOREIGN KEY ("A") REFERENCES "Capability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CapabilityToVessel" ADD CONSTRAINT "_CapabilityToVessel_B_fkey" FOREIGN KEY ("B") REFERENCES "Vessel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
