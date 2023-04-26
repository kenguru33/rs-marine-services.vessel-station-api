/*
  Warnings:

  - Added the required column `typeId` to the `StationAgreement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StationAgreement" ADD COLUMN     "typeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "StationAgreementType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "StationAgreementType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StationAgreementType_name_key" ON "StationAgreementType"("name");

-- AddForeignKey
ALTER TABLE "StationAgreement" ADD CONSTRAINT "StationAgreement_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "StationAgreementType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
