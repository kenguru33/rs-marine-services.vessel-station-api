import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateVesselClassDto } from './dto/createVesselClass.dto';
import { VesselClassesService } from './vessel-classes.service';
import { UpdateVesselClassDto } from './dto/updateVesselClass.dto';

@Controller('vessel-classes')
export class VesselClassesController {
  constructor(private vesselClassService: VesselClassesService) {}

  @Get(':id')
  vesselClass(@Param('id', ParseIntPipe) id: number) {
    return this.vesselClassService.vesselClass(id);
  }

  @Get()
  vesselClasses() {
    return this.vesselClassService.vesselClasses();
  }

  @Post('')
  @UsePipes(new ValidationPipe({ transform: true }))
  createVesselClass(@Body() data: CreateVesselClassDto) {
    return this.vesselClassService.createVesselClass(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  updateVesselClass(@Body() data: UpdateVesselClassDto, @Param('id') id: number) {
    return this.vesselClassService.updateVesselClass(id, data);
  }

  @Delete(':id')
  deleteVesselClass(@Param('id', ParseIntPipe) id: number) {
    return this.vesselClassService.deleteVesselClass(id);
  }
}
