/*
  Warnings:

  - You are about to drop the `_StationPierToStationPierElictricalSystem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_StationPierToStationPierElictricalSystem" DROP CONSTRAINT "_StationPierToStationPierElictricalSystem_A_fkey";

-- DropForeignKey
ALTER TABLE "_StationPierToStationPierElictricalSystem" DROP CONSTRAINT "_StationPierToStationPierElictricalSystem_B_fkey";

-- AlterTable
ALTER TABLE "StationPierElictricalSystem" ADD COLUMN     "stationPierId" INTEGER;

-- DropTable
DROP TABLE "_StationPierToStationPierElictricalSystem";

-- AddForeignKey
ALTER TABLE "StationPierElictricalSystem" ADD CONSTRAINT "StationPierElictricalSystem_stationPierId_fkey" FOREIGN KEY ("stationPierId") REFERENCES "StationPier"("id") ON DELETE SET NULL ON UPDATE CASCADE;
