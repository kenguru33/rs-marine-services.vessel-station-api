import { Controller } from "@nestjs/common";
import { VesselEngineService } from "./vessel-engine.service";

@Controller("vessel-engine")
export class VesselEngineController {
  constructor(private vesselEngineService: VesselEngineService) {}
}
