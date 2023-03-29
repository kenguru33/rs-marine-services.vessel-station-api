import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateVesselClassDto } from './dto/createVesselClass.dto';
import { VesselClassesService } from './vessel-classes.service';

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

  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
  createVesselClass(@Body() data: CreateVesselClassDto) {
    return this.vesselClassService.createVesselClass(data);
  }
}
