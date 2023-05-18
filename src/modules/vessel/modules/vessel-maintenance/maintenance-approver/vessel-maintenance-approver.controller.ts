import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { VesselMaintenanceApproverService } from './vessel-maintenance-approver.service';
import { CreateVesselMaintenanceApproverDto } from './dto/create-vessel-maintenance-approver.dto';
import { UpdateVesselMaintenanceApproverDto } from './dto/update-vessel-maintenance-approver.dto';

@Controller('vessel-maintenance-approver')
export class VesselMaintenanceApproverController {
  constructor(
    private vesselMaintenanceApproverService: VesselMaintenanceApproverService,
  ) {}

  @Get()
  async getVesselMaintenanceApprovers() {
    return await this.vesselMaintenanceApproverService.getVesselMaintenanceApprovers();
  }

  @Get(':id')
  async getVesselMaintenanceApprover(@Param('id', ParseIntPipe) id: number) {
    return await this.vesselMaintenanceApproverService.getVesselMaintenanceApprover(
      id,
    );
  }

  @Post()
  async createVesselMaintenanceApprover(
    @Body() data: CreateVesselMaintenanceApproverDto,
  ) {
    return await this.vesselMaintenanceApproverService.createVesselMaintenanceApprover(
      data,
    );
  }

  @Put(':id')
  async updateVesselMaintenanceApprover(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselMaintenanceApproverDto,
  ) {
    return await this.vesselMaintenanceApproverService.updateVesselMaintenanceApprover(
      id,
      data,
    );
  }
}
