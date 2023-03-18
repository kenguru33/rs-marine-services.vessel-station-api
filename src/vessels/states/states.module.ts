import { Module } from '@nestjs/common';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';
import { RepositoryService } from './repository.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PrismaService, StatesService, RepositoryService],
  controllers: [StatesController]
})
export class StatesModule {}
