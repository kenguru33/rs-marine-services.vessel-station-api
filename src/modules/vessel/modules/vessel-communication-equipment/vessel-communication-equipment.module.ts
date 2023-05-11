import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../database/database.module';
import { VesselCommunicationEquipmentService } from './vessel-communication-equipment.service';
import { VesselCommunicationEquipmentController } from './vessel-communication-equipment.controller';

@Module({
  providers: [VesselCommunicationEquipmentService],
  controllers: [VesselCommunicationEquipmentController],
  imports: [DatabaseModule],
})
export class VesselCommunicationEquipmentModule {}
