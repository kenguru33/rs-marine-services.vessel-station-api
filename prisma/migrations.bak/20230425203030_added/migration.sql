-- CreateTable
CREATE TABLE "StationAgreement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StationAgreement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_StationToStationAgreement" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "StationAgreement_name_key" ON "StationAgreement"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_StationToStationAgreement_AB_unique" ON "_StationToStationAgreement"("A", "B");

-- CreateIndex
CREATE INDEX "_StationToStationAgreement_B_index" ON "_StationToStationAgreement"("B");

-- AddForeignKey
ALTER TABLE "_StationToStationAgreement" ADD CONSTRAINT "_StationToStationAgreement_A_fkey" FOREIGN KEY ("A") REFERENCES "Station"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StationToStationAgreement" ADD CONSTRAINT "_StationToStationAgreement_B_fkey" FOREIGN KEY ("B") REFERENCES "StationAgreement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
