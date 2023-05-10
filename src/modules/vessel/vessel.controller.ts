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
import { UpdateVesselDto } from './dto/updateVessel.dto';
import { VesselResponseTransformInterceptor } from './interceptors/vessel-response-transform.interceptor';
import { Vessel } from '@prisma/client';
import { VesselService, VesselWithRelation } from './vessel.service';
import { QueryVesselDto } from './dto/query-vessel.dto';
import { QueryParamsValidatorInterceptor } from '../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';

@Controller('vessel')
export class VesselController {
  constructor(private vesselService: VesselService) {}

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES),
    VesselResponseTransformInterceptor,
  )
  @Get(':id')
  getVessel(
    @Param('id', ParseIntPipe) id: number,
    @Query('include') include: string,
  ): Promise<Vessel> {
    return this.vesselService.getVessel(id, include);
  }

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
    VesselResponseTransformInterceptor,
  )
  @Get()
  getVessels(
    @Query() query: QueryVesselDto,
  ): Promise<Vessel[] | VesselWithRelation[]> {
    return this.vesselService.getVessels(query);
  }

  @Post()
  createVessel(@Body() data: CreateVesselDto): Promise<Vessel> {
    return this.vesselService.create(data);
  }

  @Put(':id')
  updateVessel(
    @Body() data: UpdateVesselDto,
    @Param('id') id: number,
  ): Promise<Vessel> {
    return this.vesselService.update(id, data);
  }

  @Delete(':id')
  deleteVessel(@Param('id', ParseIntPipe) id: number): Promise<Vessel> {
    return this.vesselService.delete(id);
  }
}
