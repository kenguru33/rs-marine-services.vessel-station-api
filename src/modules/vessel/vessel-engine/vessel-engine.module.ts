import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../../database/database.module";

@Module({
  providers: [],
  controllers: [],
  imports: [DatabaseModule],
})
export class VesselCommunicationEquipmentModule {}