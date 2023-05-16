import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { VesselMaintenanceService } from './vessel-maintenance.service';
import { CreateVesselMaintenanceDto } from './dto/create-vessel-maintenance.dto';
import { UpdateVesselMaintenanceDto } from './dto/update-vessel-maintenance.dto';
import { ALLOWED_INCLUDES, ALLOWED_FILTERS } from './constant';
import { QueryVesselMaintenancepDto } from './dto/query-vessel-maintenance.dto';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { VesselMaintenanceInterceptor } from './interceptors/vessel-maintenance.interceptor';

@UseInterceptors(VesselMaintenanceInterceptor)
@Controller('vessel-maintenance')
export class VesselMaintenanceController {
  constructor(private vesselMaintenanceService: VesselMaintenanceService) {}

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getVesselMaintenances(@Query() query: QueryVesselMaintenancepDto) {
    return await this.vesselMaintenanceService.getVesselMaintenances(query);
  }

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES),
  )
  @Get(':id')
  async getVesselMaintenance(@Param('id', ParseIntPipe) id: number,@Query() query: QueryVesselMaintenancepDto) {
    return await this.vesselMaintenanceService.getVesselMaintenance(id, query);
  }

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES),
  )
  @Post()
  async createVesselMaintenance(@Body() data: CreateVesselMaintenanceDto, @Query() query: QueryVesselMaintenancepDto) {
    return await this.vesselMaintenanceService.createVesselMaintenance(data, query);
  }

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES),
  )
  @Put(':id')
  async updateVesselMaintenance(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselMaintenanceDto,
    @Query() query: QueryVesselMaintenancepDto,
  ) {
    return await this.vesselMaintenanceService.updateVesselMaintenance(
      id,
      data,
      query
    );
  }

  @Delete(':id')
  async deleteVesselMaintenance(@Param('id', ParseIntPipe) id: number) {
    return await this.vesselMaintenanceService.deleteVesselMaintenance(id);
  }
}
