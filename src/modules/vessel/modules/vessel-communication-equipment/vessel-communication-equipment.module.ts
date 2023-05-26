import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../database/database.module';
import { VesselCommEquipService } from './vessel-communication-equipment.service';
import { VesselCommunicationEquipmentController } from './vessel-communication-equipment.controller';
import { VesselCommunicationEquipmentTypeService } from './vessel-communication-equipment-type/vessel-communication-equipment-type.service';
import { VesselCommunicationEquipmentTypeController } from './vessel-communication-equipment-type/vessel-communication-equipments-type.controller';

@Module({
  providers: [VesselCommEquipService, VesselCommunicationEquipmentTypeService],
  controllers: [
    VesselCommunicationEquipmentController,
    VesselCommunicationEquipmentTypeController,
  ],
  imports: [DatabaseModule],
})
export class VesselCommunicationEquipmentModule {}
