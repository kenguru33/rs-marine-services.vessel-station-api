-- DropForeignKey
ALTER TABLE "VesselSubState" DROP CONSTRAINT "VesselSubState_stateId_fkey";

-- AlterTable
ALTER TABLE "VesselSubState" ALTER COLUMN "stateId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "VesselSubState" ADD CONSTRAINT "VesselSubState_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "VesselState"("id") ON DELETE SET NULL ON UPDATE CASCADE;
