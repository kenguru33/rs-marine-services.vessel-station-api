import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { VesselMaintenanceService } from './vessel-maintenance.service';
import { CreateVesselMaintenanceDto } from './dto/create-vessel-maintenance.dto';
import { UpdateVesselMaintenanceDto } from './dto/update-vessel-maintenance.dto';

@UseInterceptors()
@Controller('vessel-maintenance')
export class VesselMaintenanceController {
  constructor(private vesselMaintenanceService: VesselMaintenanceService) {}

  @Get()
  async getVesselMaintenances() {
    return await this.vesselMaintenanceService.getVesselMaintenances();
  }

  @Get(':id')
  async getVesselMaintenance(@Param('id', ParseIntPipe) id: number) {
    return await this.vesselMaintenanceService.getVesselMaintenance(id);
  }

  @Post()
  async createVesselMaintenance(@Body() data: CreateVesselMaintenanceDto) {
    return await this.vesselMaintenanceService.createVesselMaintenance(data);
  }

  @Put(':id')
  async updateVesselMaintenance(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselMaintenanceDto,
  ) {
    return await this.vesselMaintenanceService.updateVesselMaintenance(
      id,
      data,
    );
  }

  @Delete(':id')
  async deleteVesselMaintenance(@Param('id', ParseIntPipe) id: number) {
    return await this.vesselMaintenanceService.deleteVesselMaintenance(id);
  }
}
