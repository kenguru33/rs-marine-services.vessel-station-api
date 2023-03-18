import { Controller, Get, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { VesselClassesService } from './vessel-classes.service';

@Controller('vessels/vessel-classes')
export class VesselClassesController {
  constructor(private vesselClassService: VesselClassesService) {}
  
  @Get(':id')
  vesselClass(id: number) {
    return this.vesselClassService.vesselClass(id);
  }

  @Get()
  vesselClasses() {
    return this.vesselClassService.vesselClasses();
  }

  @Post()
  createVesselClass(data: Prisma.VesselClassCreateInput) {
    return this.vesselClassService.createVesselClass(data);
  }
    
}
