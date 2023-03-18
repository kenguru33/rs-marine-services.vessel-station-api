import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { VesselsService } from './vessels.service';
import { VesselsController } from './vessels.controller';
import { StatesModule } from './states/states.module';
import { CapabilitiesModule } from './capabilities/capabilities.module';
import { VesselClassesModule } from './vessel-classes/vessel-classes.module';
import { VesselsRepository } from './vessels.repository';

@Module({
  providers: [PrismaService, VesselsService, VesselsRepository],
  controllers: [VesselsController],
  imports: [StatesModule, VesselClassesModule, CapabilitiesModule],
})
export class VesselsModule {}
