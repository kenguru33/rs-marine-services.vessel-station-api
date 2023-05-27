import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
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
import { QueryVesselMaintenanceIncludeDto } from './dto/query-vessel-maintenance-include.dto';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { VesselMaintenanceInterceptor } from './interceptors/vessel-maintenance.interceptor';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryVesselMaintenanceFilterDto } from './dto/query-vessel-maintenance-filter.dto';

@ApiTags('vessel-maintenance')
@UseInterceptors(VesselMaintenanceInterceptor)
@Controller('vessel-maintenance')
export class VesselMaintenanceController {
  constructor(private vesselMaintenanceService: VesselMaintenanceService) {}

  @ApiOperation({ summary: 'Get all vessel maintenances' })
  @ApiResponse({
    type: CreateVesselMaintenanceDto,
    isArray: true,
    status: HttpStatus.OK,
  })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getVesselMaintenances(
    @Query() queryInclude: QueryVesselMaintenanceIncludeDto,
    @Query() queryFilter: QueryVesselMaintenanceFilterDto,
  ) {
    return await this.vesselMaintenanceService.getVesselMaintenances(
      queryInclude,
      queryFilter,
    );
  }

  @ApiOperation({ summary: 'Get vessel maintenance by id' })
  @ApiResponse({ type: CreateVesselMaintenanceDto, status: HttpStatus.OK })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getVesselMaintenance(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: QueryVesselMaintenanceIncludeDto,
  ) {
    return await this.vesselMaintenanceService.getVesselMaintenance(id, query);
  }

  @ApiOperation({ summary: 'Create vessel maintenance' })
  @ApiResponse({ type: CreateVesselMaintenanceDto, status: HttpStatus.CREATED })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createVesselMaintenance(
    @Body() data: CreateVesselMaintenanceDto,
    @Query() query: QueryVesselMaintenanceIncludeDto,
  ) {
    return await this.vesselMaintenanceService.createVesselMaintenance(
      data,
      query,
    );
  }

  @ApiOperation({ summary: 'Update vessel maintenance' })
  @ApiResponse({ type: CreateVesselMaintenanceDto, status: HttpStatus.OK })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateVesselMaintenance(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselMaintenanceDto,
    @Query() query: QueryVesselMaintenanceIncludeDto,
  ) {
    return await this.vesselMaintenanceService.updateVesselMaintenance(
      id,
      data,
      query,
    );
  }

  @ApiOperation({ summary: 'Delete vessel maintenance' })
  @ApiResponse({ type: CreateVesselMaintenanceDto, status: HttpStatus.OK })
  @Delete(':id')
  async deleteVesselMaintenance(@Param('id', ParseIntPipe) id: number) {
    return await this.vesselMaintenanceService.deleteVesselMaintenance(id);
  }
}
