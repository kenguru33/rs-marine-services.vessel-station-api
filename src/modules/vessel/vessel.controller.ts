import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateVesselDto } from './dto/createVessel.dto';
import { UpdateVesselDto } from './dto/update-vessel.dto';
import { VesselResponseTransformInterceptor } from './interceptors/vessel-response-transform.interceptor';
import { Vessel } from '@prisma/client';
import { VesselService, VesselWithRelation } from './vessel.service';
import { QueryVesselFilterDto } from './dto/query-vessel-filter.dto';
import { QueryParamsValidatorInterceptor } from '../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { ApiTags } from '@nestjs/swagger';
import { QueryIncludeDto } from '../../shared/dto/query-include.dto';

@ApiTags('vessel')
@UseInterceptors(VesselResponseTransformInterceptor)
@Controller('vessel')
export class VesselController {
  constructor(private vesselService: VesselService) {}

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  getVessel(
    @Param('id', ParseIntPipe) id: number,
    @Query() include: QueryIncludeDto,
  ): Promise<Vessel> {
    return this.vesselService.getVessel(id, include);
  }

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  getVessels(
    @Query() include: QueryIncludeDto,
    @Query() filter: QueryVesselFilterDto,
  ): Promise<Vessel[] | VesselWithRelation[]> {
    return this.vesselService.getVessels(include, filter);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  createVessel(
    @Body() data: CreateVesselDto,
    @Query() query: QueryVesselFilterDto,
  ): Promise<Vessel> {
    return this.vesselService.create(data, query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  updateVessel(
    @Body() data: UpdateVesselDto,
    @Param('id') id: number,
    @Query() query: QueryVesselFilterDto,
  ): Promise<Vessel> {
    return this.vesselService.update(id, data, query);
  }

  @Delete(':id')
  deleteVessel(@Param('id', ParseIntPipe) id: number): Promise<Vessel> {
    return this.vesselService.delete(id);
  }
}
