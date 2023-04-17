import { Module } from '@nestjs/common';
import { VesselsService } from './vessels.service';
import { VesselsController } from './vessels.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [VesselsService],
  controllers: [VesselsController],
  imports: [
    DatabaseModule,
  ],
  exports: [VesselsService],
})
export class VesselsModule {}
