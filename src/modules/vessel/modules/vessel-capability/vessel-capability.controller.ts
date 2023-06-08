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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VesselCapability } from '@prisma/client';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { CreateVesselCapabilityDto } from './dto/create-vessel-capability.dto';
import { QueryVesselCapabilityFilterDto } from './dto/query-vessel-capability-filter.dto';
import { QueryVesselCapabilityIncludeDto } from './dto/query-vessel-capability-include.dto';
import { UpdateVesselCapabilityDto } from './dto/update-vessel-capability.dto';
import { VesselCapabilityResponseTransformInterceptor } from './interceptors/vessel-capability-response-transform.interceptor';
import { VesselCapabilityService } from './vessel-capabilities.service';
import { ResponseVesselCapabilityDto } from './dto/response-vessel-capability.dto';

@ApiTags('vessel-capability')
@UseInterceptors(VesselCapabilityResponseTransformInterceptor)
@Controller('vessel-capability')
export class VesselCapabilityController {
  constructor(private capabilitiesService: VesselCapabilityService) {}

  @ApiOperation({ summary: 'Get all capabilities' })
  @ApiResponse({ type: ResponseVesselCapabilityDto, isArray: true })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getCapabilities(
    @Query() queryVesselCapabilityIncludeDto: QueryVesselCapabilityIncludeDto,
    @Query() queryVesselCapabilityFilterDto: QueryVesselCapabilityFilterDto,
  ): Promise<VesselCapability[]> {
    return this.capabilitiesService.getCapabilities(
      queryVesselCapabilityIncludeDto,
      queryVesselCapabilityFilterDto,
    );
  }

  @ApiOperation({ summary: 'Get capability by id' })
  @ApiResponse({ type: ResponseVesselCapabilityDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getCapability(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryVesselCapabilityIncludeDto: QueryVesselCapabilityIncludeDto,
  ): Promise<VesselCapability> {
    return this.capabilitiesService.getCapability(
      id,
      queryVesselCapabilityIncludeDto,
    );
  }

  @ApiOperation({ summary: 'Create capability' })
  @ApiResponse({ type: ResponseVesselCapabilityDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createCapability(
    @Body() createVesselCapabilityDto: CreateVesselCapabilityDto,
    @Query() queryVesselCapabilityIncludeDto: QueryVesselCapabilityIncludeDto,
  ): Promise<VesselCapability> {
    return this.capabilitiesService.createCapability(
      createVesselCapabilityDto,
      queryVesselCapabilityIncludeDto,
    );
  }

  @ApiOperation({ summary: 'Update capability' })
  @ApiResponse({ type: ResponseVesselCapabilityDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateCapability(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateVesselCapabilityDto: UpdateVesselCapabilityDto,
    @Query() queryVesselCapabilityIncludeDto: QueryVesselCapabilityIncludeDto,
  ): Promise<VesselCapability> {
    return this.capabilitiesService.updateCapability(
      id,
      updateVesselCapabilityDto,
      queryVesselCapabilityIncludeDto,
    );
  }

  @ApiOperation({ summary: 'Delete capability' })
  @ApiResponse({ type: ResponseVesselCapabilityDto })
  @Delete(':id')
  async deleteCapability(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<VesselCapability> {
    return this.capabilitiesService.deleteCapability(id);
  }
}
