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
import { Prisma, VesselCapability } from '@prisma/client';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { CreateVesselCapabilityDto } from './dto/createVesselCapability.dto';
import { QueryVesselCapabilityDto } from './dto/query-vessel-capability.dto';
import { UpdateVesselCapabilityDto } from './dto/updateVesselCapability.dto';
import { VesselCapabilityResponseTransformInterceptor } from './interceptors/vessel-capability-response-transform.interceptor';
import { VesselCapabilityService } from './vessel-capabilities.service';

@UseInterceptors(VesselCapabilityResponseTransformInterceptor)
@Controller('vessel-capability')
export class VesselCapabilityController {
  constructor(private capabilitiesService: VesselCapabilityService) {}

  @UseInterceptors(
    new QueryParamsValidatorInterceptor<Prisma.VesselCapabilityInclude>(
      ALLOWED_INCLUDES,
      ALLOWED_FILTERS,
    ),
  )
  @Get()
  async getCapabilities(
    @Query() query: QueryVesselCapabilityDto,
  ): Promise<VesselCapability[]> {
    return this.capabilitiesService.getCapabilities(query);
  }

  @UseInterceptors(
    new QueryParamsValidatorInterceptor<Prisma.VesselCapabilityInclude>(
      ALLOWED_INCLUDES,
    ),
  )
  @Get(':id')
  async getCapability(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: QueryVesselCapabilityDto,
  ): Promise<VesselCapability> {
    return this.capabilitiesService.getCapability(id, query);
  }

  @UseInterceptors(
    new QueryParamsValidatorInterceptor<Prisma.VesselCapabilityInclude>(
      ALLOWED_INCLUDES,
    ),
  )
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createCapability(
    @Body() dto: CreateVesselCapabilityDto,
    @Query() query: QueryVesselCapabilityDto,
  ): Promise<VesselCapability> {
    return this.capabilitiesService.createCapability(dto, query);
  }

  @UseInterceptors(
    new QueryParamsValidatorInterceptor<Prisma.VesselCapabilityInclude>(
      ALLOWED_INCLUDES,
    ),
  )
  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateCapability(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateVesselCapabilityDto,
    @Query() query: QueryVesselCapabilityDto,
  ): Promise<VesselCapability> {
    return this.capabilitiesService.updateCapability(id, dto, query);
  }

  @Delete(':id')
  async deleteCapability(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<VesselCapability> {
    return this.capabilitiesService.deleteCapability(id);
  }
}
