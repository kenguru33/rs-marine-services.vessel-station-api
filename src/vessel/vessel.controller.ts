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
import { VesselTransformInterceptor } from './interceptors/vesselTransform.interceptor';
import { VesselResponseDto } from './dto/vesselResponse.dto';
import { Vessel } from '@prisma/client';
import { VesselService, VesselWithRelation } from './vessel.service';

@Controller('vessel')
//@UseInterceptors(VesselTransformInterceptor)
export class VesselController {
  constructor(private vesselService: VesselService) {}

  @Get(':id')
  getVessel(
    @Param('id', ParseIntPipe) id: number,
    @Query('include') include: string,
  ): Promise<Vessel> {
    console.log('include: ', include);
    return this.vesselService.getVessel(id, include);
  }

  @Get()
  @UseInterceptors(VesselTransformInterceptor)
  getVessels(
    @Query('include') include: string,
  ): Promise<Vessel[] | VesselWithRelation[]> {
    return this.vesselService.getVessels(include);
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
