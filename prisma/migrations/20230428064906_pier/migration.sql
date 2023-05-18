/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `StationPierType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `StationPierType_name_key` ON `StationPierType`(`name`);
