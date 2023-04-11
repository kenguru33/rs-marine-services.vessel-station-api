import { Injectable } from '@nestjs/common';
import { CreateVesselClassDto } from './dto/createVesselClass.dto';
import { UpdateVesselClassDto } from './dto/updateVesselClass.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class VesselClassesService {
  constructor(private prisma: PrismaService) {}

  async vesselClass(id: number): Promise<CreateVesselClassDto> {
    return this.prisma.vesselClass.findUniqueOrThrow({
      where: { id },
      include: { vessels: true },
    });
  }

  async vesselClasses(): Promise<CreateVesselClassDto[]> {
    return this.prisma.vesselClass.findMany({
      include: { vessels: true },
    });
  }

  async createVesselClass(data: CreateVesselClassDto) {
    return this.prisma.vesselClass.create({
      data,
    });
  }

  async updateVesselClass(id: number, data: UpdateVesselClassDto) {
    return this.prisma.vesselClass.update({
      where: { id },
      data,
    });
  }

  async deleteVesselClass(id: number) {
    return this.prisma.vesselClass.delete({
      where: { id },
    });
  }
}
