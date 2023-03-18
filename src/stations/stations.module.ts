import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { StationsController } from './stations.controller';
import { StationsRepository } from './stations.repository';
import { StationsService } from './stations.service';

@Module({
  providers: [PrismaService, StationsService, StationsRepository],
  controllers: [StationsController],
})
export class StationsModule {}
