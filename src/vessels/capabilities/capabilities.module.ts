import { Module } from '@nestjs/common';
import { CapabilitiesService } from './capabilities.service';
import { CapabilitiesController } from './capabilities.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PrismaService, CapabilitiesService],
  controllers: [CapabilitiesController],
})
export class CapabilitiesModule {}
