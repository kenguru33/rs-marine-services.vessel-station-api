-- CreateTable
CREATE TABLE `Vessel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `rs` INTEGER NOT NULL,
    `typeId` INTEGER NOT NULL,
    `stationId` INTEGER NULL,
    `classId` INTEGER NOT NULL,
    `stateId` INTEGER NOT NULL,

    UNIQUE INDEX `Vessel_name_key`(`name`),
    UNIQUE INDEX `Vessel_rs_key`(`rs`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VesselType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `VesselType_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VesselStateCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `inUse` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `VesselStateCategory_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VesselState` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `inUse` BOOLEAN NOT NULL DEFAULT true,
    `stateCategoryId` INTEGER NOT NULL,

    UNIQUE INDEX `VesselState_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VesselCapability` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `VesselCapability_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VesselClass` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `range` INTEGER NOT NULL,
    `speed` INTEGER NOT NULL,

    UNIQUE INDEX `VesselClass_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Station` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `tilFelt` VARCHAR(191) NULL,
    `address` VARCHAR(191) NOT NULL,
    `postalCode` VARCHAR(191) NOT NULL,
    `postalLocation` VARCHAR(191) NOT NULL,
    `postalBox` INTEGER NULL,
    `postalDelivery` VARCHAR(191) NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,
    `typeId` INTEGER NOT NULL,

    UNIQUE INDEX `Station_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StationType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `StationType_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StationAccommodation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `typeId` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,
    `address` VARCHAR(191) NOT NULL,
    `postalCode` VARCHAR(191) NOT NULL,
    `postalLocation` VARCHAR(191) NOT NULL,
    `postalBox` INTEGER NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,
    `stationId` INTEGER NOT NULL,

    UNIQUE INDEX `StationAccommodation_stationId_key`(`stationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StationAccommodationType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `StationAccommodationType_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StationPier` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `length` INTEGER NOT NULL,
    `width` INTEGER NOT NULL,
    `minimumDepth` INTEGER NOT NULL,
    `stationPierTypeId` INTEGER NULL,
    `floating` BOOLEAN NOT NULL DEFAULT false,
    `diesel` BOOLEAN NOT NULL DEFAULT false,
    `petrol` BOOLEAN NOT NULL DEFAULT false,
    `storageSpace` BOOLEAN NOT NULL DEFAULT false,
    `coldWater` BOOLEAN NOT NULL DEFAULT false,
    `hotWater` BOOLEAN NOT NULL DEFAULT false,
    `stationId` INTEGER NOT NULL,

    UNIQUE INDEX `StationPier_stationId_key`(`stationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StationPierType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StationPierElictricalSystem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `stationPierId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StationAgreement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `typeId` INTEGER NOT NULL,

    UNIQUE INDEX `StationAgreement_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StationAgreementType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `StationAgreementType_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_VesselToVesselCapability` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_VesselToVesselCapability_AB_unique`(`A`, `B`),
    INDEX `_VesselToVesselCapability_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_StationToStationAgreement` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_StationToStationAgreement_AB_unique`(`A`, `B`),
    INDEX `_StationToStationAgreement_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vessel` ADD CONSTRAINT `Vessel_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `VesselType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vessel` ADD CONSTRAINT `Vessel_stationId_fkey` FOREIGN KEY (`stationId`) REFERENCES `Station`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vessel` ADD CONSTRAINT `Vessel_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `VesselClass`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vessel` ADD CONSTRAINT `Vessel_stateId_fkey` FOREIGN KEY (`stateId`) REFERENCES `VesselState`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VesselState` ADD CONSTRAINT `VesselState_stateCategoryId_fkey` FOREIGN KEY (`stateCategoryId`) REFERENCES `VesselStateCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Station` ADD CONSTRAINT `Station_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `StationType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StationAccommodation` ADD CONSTRAINT `StationAccommodation_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `StationAccommodationType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StationAccommodation` ADD CONSTRAINT `StationAccommodation_stationId_fkey` FOREIGN KEY (`stationId`) REFERENCES `Station`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StationPier` ADD CONSTRAINT `StationPier_stationPierTypeId_fkey` FOREIGN KEY (`stationPierTypeId`) REFERENCES `StationPierType`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StationPier` ADD CONSTRAINT `StationPier_stationId_fkey` FOREIGN KEY (`stationId`) REFERENCES `Station`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StationPierElictricalSystem` ADD CONSTRAINT `StationPierElictricalSystem_stationPierId_fkey` FOREIGN KEY (`stationPierId`) REFERENCES `StationPier`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StationAgreement` ADD CONSTRAINT `StationAgreement_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `StationAgreementType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_VesselToVesselCapability` ADD CONSTRAINT `_VesselToVesselCapability_A_fkey` FOREIGN KEY (`A`) REFERENCES `Vessel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_VesselToVesselCapability` ADD CONSTRAINT `_VesselToVesselCapability_B_fkey` FOREIGN KEY (`B`) REFERENCES `VesselCapability`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_StationToStationAgreement` ADD CONSTRAINT `_StationToStationAgreement_A_fkey` FOREIGN KEY (`A`) REFERENCES `Station`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_StationToStationAgreement` ADD CONSTRAINT `_StationToStationAgreement_B_fkey` FOREIGN KEY (`B`) REFERENCES `StationAgreement`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
