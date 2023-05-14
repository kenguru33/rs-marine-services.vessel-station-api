import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../database/database.module';
import { VesselCommEquipService } from './vessel-comm-equip.service';
import { VesselCommEquipController } from './vessel-comm-equip.controller';
import { VesselCommEquipTypeService } from './vessel-comm-equip-type/vessel-comm-equip-type.service';
import { VesselCommEquipTypeController } from './vessel-comm-equip-type/vessel-comm-equip-type.controller';

@Module({
  providers: [VesselCommEquipService, VesselCommEquipTypeService],
  controllers: [VesselCommEquipController, VesselCommEquipTypeController],
  imports: [DatabaseModule],
})
export class VesselCommEquipModule {}
