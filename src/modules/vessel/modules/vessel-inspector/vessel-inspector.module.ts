import { Module } from "@nestjs/common";
import { VesselInspectorController } from "./vessel-inspector.controller";
import { VesselInspectorService } from "./vessel-inspector.service";
import { DatabaseModule } from "../../../../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [VesselInspectorController],
  providers: [VesselInspectorService],
})
export class VesselInspectorModule {}
