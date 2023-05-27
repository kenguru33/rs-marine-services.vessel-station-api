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
} from '@nestjs/common';
import { VesselMaintenanceApproverService } from './vessel-maintenance-approver.service';
import { CreateVesselMaintenanceApproverDto } from './dto/create-vessel-maintenance-approver.dto';
import { UpdateVesselMaintenanceApproverDto } from './dto/update-vessel-maintenance-approver.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryVesselMaintenanceApproverIncludeDto } from './dto/query-vessel-maintenance-approver-include.dto';
import { QueryVesselMaintenanceApproverFilterDto } from './dto/query-vessel-maintenace-approver-filter.dto';
import { query } from 'express';
import { ResponseVesselMaintenanceApproverDto } from './dto/response-vessel-maintenance-approver.dto';

@ApiTags('vessel-maintenance-approver')
@Controller('vessel-maintenance-approver')
export class VesselMaintenanceApproverController {
  constructor(
    private vesselMaintenanceApproverService: VesselMaintenanceApproverService,
  ) {}

  @ApiOperation({ summary: 'Get all vessel maintenance approvers' })
  @ApiResponse({
    type: ResponseVesselMaintenanceApproverDto,
    isArray: true,
    status: 200,
    description: 'Get success',
  })
  @Get()
  async getVesselMaintenanceApprovers(
    @Query() queryInclude: QueryVesselMaintenanceApproverIncludeDto,
    @Query() queryFilter: QueryVesselMaintenanceApproverFilterDto,
  ) {
    return await this.vesselMaintenanceApproverService.getVesselMaintenanceApprovers(
      queryInclude,
      queryFilter,
    );
  }

  @ApiOperation({ summary: 'Get vessel maintenance approver by id' })
  @ApiResponse({
    type: ResponseVesselMaintenanceApproverDto,
    status: 200,
    description: 'Get success',
  })
  @Get(':id')
  async getVesselMaintenanceApprover(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryVesselMaintenanceApproverIncludeDto,
  ) {
    return await this.vesselMaintenanceApproverService.getVesselMaintenanceApprover(
      id,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Create vessel maintenance approver' })
  @ApiResponse({
    type: ResponseVesselMaintenanceApproverDto,
    status: 201,
    description: 'Create success',
  })
  @Post()
  async createVesselMaintenanceApprover(
    @Body() data: CreateVesselMaintenanceApproverDto,
    @Query() queryInclude: QueryVesselMaintenanceApproverIncludeDto,
  ) {
    return await this.vesselMaintenanceApproverService.createVesselMaintenanceApprover(
      data,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Update vessel maintenance approver by id' })
  @ApiResponse({
    type: ResponseVesselMaintenanceApproverDto,
    status: 200,
    description: 'Update success',
  })
  @Put(':id')
  async updateVesselMaintenanceApprover(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselMaintenanceApproverDto,
    @Query() queryInclude: QueryVesselMaintenanceApproverIncludeDto,
  ) {
    return await this.vesselMaintenanceApproverService.updateVesselMaintenanceApprover(
      id,
      data,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Delete vessel maintenance approver by id' })
  @ApiResponse({ type: ResponseVesselMaintenanceApproverDto })
  @Delete(':id')
  async deleteVesselMaintenanceApprover(@Param('id', ParseIntPipe) id: number) {
    return await this.vesselMaintenanceApproverService.deleteVesselMaintenanceApprover(
      id,
    );
  }
}
