import { Get, Injectable, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VesselClassesService {
  constructor(private prisma: PrismaService) {}
  
  @Get(':id')
  vesselClass(id: number) {
    return this.prisma.vesselClass.findUnique({
      where: { id },
    });
  }

  @Get()
  vesselClasses() {
    return this.prisma.vesselClass.findMany();
  }

  @Post()
  createVesselClass(data: Prisma.VesselClassCreateInput) {
    return this.prisma.vesselClass.create({
      data,
    });
  }

}
