import { Module } from '@nestjs/common';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';
import { StatesRepositoryService } from './states.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PrismaService, StatesService, StatesRepositoryService],
  controllers: [StatesController],
})
export class StatesModule {}
