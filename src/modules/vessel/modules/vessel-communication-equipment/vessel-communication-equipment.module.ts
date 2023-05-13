import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../database/database.module';
import { VesselCommunicationEquipmentService } from './vessel-communication-equipment.service';
import { VesselCommunicationEquipmentController } from './vessel-communication-equipment.controller';
import { VesselCommunicationEquipmentTypeService } from './vessel-communication-equipment-type/vessel-communication-equipment-type.service';
import { VesselCommunicationEquipmentTypeController } from './vessel-communication-equipment-type/vessel-communication-equipment-type.controller';

@Module({
  providers: [
    VesselCommunicationEquipmentService,
    VesselCommunicationEquipmentTypeService,
  ],
  controllers: [
    VesselCommunicationEquipmentController,
    VesselCommunicationEquipmentTypeController,
  ],
  imports: [DatabaseModule],
})
export class VesselCommunicationEquipmentModule {}
