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
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateVesselDto } from './dto/createVessel.dto';
import { UpdateVesselDto } from './dto/updateVessel.dto';
import { VesselWithRelation, VesselsService } from './vessels.service';
import { VesselTransformInterceptor } from './interceptors/vesselTransform.interceptor';
import { VesselResponseDto } from './dto/vesselResponse.dto';

@Controller('vessels')
@UseInterceptors(VesselTransformInterceptor)
export class VesselsController {
  constructor(private vesselsService: VesselsService) {}

  @Get(':id')
  vessel(@Param('id', ParseIntPipe) id: number): Promise<VesselWithRelation> {
    return this.vesselsService.findOne(id);
  }

  @Get()
  vessels(): Promise<VesselWithRelation[]> {
    return this.vesselsService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createVessel(@Body() data: CreateVesselDto): Promise<VesselWithRelation> {
    return this.vesselsService.create(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  updateVessel(@Body() data: UpdateVesselDto, @Param('id') id: number): Promise<VesselWithRelation> {
    return this.vesselsService.update(id, data);
  }

  @Delete(':id')
  deleteVessel(@Param('id', ParseIntPipe) id: number): Promise<VesselWithRelation> {
    return this.vesselsService.delete(id);
  }
}
