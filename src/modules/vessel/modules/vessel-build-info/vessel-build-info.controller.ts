import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { VesselBuildInfoService } from "./vessel-build-info.service";
import { QueryParamsValidatorInterceptor } from "../../../../shared/interceptors/query-params-validator.interceptor";
import { VesselBuildInfoResponseTransformInterceptor } from "./interceptors/vessel-build-info-response-transform.interceptor";

@UseInterceptors(VesselBuildInfoResponseTransformInterceptor)
@Controller()
export class VesselBuildInfoController {
  constructor(private vesselBuildInfoService: VesselBuildInfoService) {}

  @Get()
  async getVesselBuildInfos() {
    return this.vesselBuildInfoService.getVesselBuildInfos();
  }
}