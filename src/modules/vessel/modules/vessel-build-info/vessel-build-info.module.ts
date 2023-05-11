import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../../../database/database.module";
import { VesselBuildInfoService } from "./vessel-build-info.service";
import { VesselBuildInfoController } from "./vessel-build-info.controller";

@Module({
  providers: [VesselBuildInfoService],
  controllers: [VesselBuildInfoController],
  imports: [DatabaseModule],
})
export class VesselBuildInfoModule {}