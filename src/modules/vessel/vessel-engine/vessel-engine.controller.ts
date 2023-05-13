import { Controller } from "@nestjs/common";
import { VesselEngineService } from "./vessel-engine.service";

@Controller("vessel-engine")
export class VesselCommunicationEquipmentController {
  constructor(private vesselEngineService: VesselEngineService) {}
}
