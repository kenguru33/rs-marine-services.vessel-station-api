import { Module } from '@nestjs/common';
import { VesselClassesService } from './vessel-classes.service';
import { VesselClassesController } from './vessel-classes.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [VesselClassesService, PrismaService],
  controllers: [VesselClassesController],
})
export class VesselClassesModule {}
