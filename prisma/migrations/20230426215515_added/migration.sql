-- CreateTable
CREATE TABLE "StationPier" (
    "id" SERIAL NOT NULL,
    "length" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "minimumDepth" INTEGER NOT NULL,
    "stationPierTypeId" INTEGER,
    "floating" BOOLEAN NOT NULL DEFAULT false,
    "diesel" BOOLEAN NOT NULL DEFAULT false,
    "petrol" BOOLEAN NOT NULL DEFAULT false,
    "storageSpace" BOOLEAN NOT NULL DEFAULT false,
    "coldWater" BOOLEAN NOT NULL DEFAULT false,
    "hotWater" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "StationPier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StationPierType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "StationPierType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StationPierElictricalSystem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "StationPierElictricalSystem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_StationPierToStationPierElictricalSystem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_StationPierToStationPierElictricalSystem_AB_unique" ON "_StationPierToStationPierElictricalSystem"("A", "B");

-- CreateIndex
CREATE INDEX "_StationPierToStationPierElictricalSystem_B_index" ON "_StationPierToStationPierElictricalSystem"("B");

-- AddForeignKey
ALTER TABLE "StationPier" ADD CONSTRAINT "StationPier_stationPierTypeId_fkey" FOREIGN KEY ("stationPierTypeId") REFERENCES "StationPierType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StationPierToStationPierElictricalSystem" ADD CONSTRAINT "_StationPierToStationPierElictricalSystem_A_fkey" FOREIGN KEY ("A") REFERENCES "StationPier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StationPierToStationPierElictricalSystem" ADD CONSTRAINT "_StationPierToStationPierElictricalSystem_B_fkey" FOREIGN KEY ("B") REFERENCES "StationPierElictricalSystem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
