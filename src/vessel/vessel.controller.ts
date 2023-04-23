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
import { VesselWithRelation, VesselService } from './vessel.service';
import { VesselTransformInterceptor } from './interceptors/vesselTransform.interceptor';
import { VesselResponseDto } from './dto/vesselResponse.dto';
import { Vessel } from '@prisma/client';

@Controller('vessel')
//@UseInterceptors(VesselTransformInterceptor)
export class VesselController {
  constructor(private vesselService: VesselService) {}

  @Get(':id')
  vessel(@Param('id', ParseIntPipe) id: number, @Query('include') include: string): Promise<Vessel> {
    console.log('include: ', include)
    return this.vesselService.getVessel(id, include);
  }

  @Get()
  vessels(@Query('include') include: string): Promise<Vessel[] | VesselWithRelation[] > {
    return this.vesselService.getVessels(include);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createVessel(@Body() data: CreateVesselDto): Promise<Vessel> {
    return this.vesselService.create(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  updateVessel(
    @Body() data: UpdateVesselDto,
    @Param('id') id: number,
  ): Promise<Vessel> {
    return this.vesselService.update(id, data);
  }

  @Delete(':id')
  deleteVessel(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Vessel> {
    return this.vesselService.delete(id);
  }
}
