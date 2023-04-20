import { Injectable } from '@nestjs/common';
import { CreateVesselClassDto } from './dto/createVesselClass.dto';
import { UpdateVesselClassDto } from './dto/updateVesselClass.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, VesselClass } from '@prisma/client';

export type VesselClassWithRelation = Prisma.VesselClassGetPayload<{
  include: {
    vessels: true;
  };
}>;

@Injectable()
export class VesselClassesService {
  constructor(private prisma: PrismaService) {}

  async vesselClass(id: number): Promise<VesselClassWithRelation> {
    return this.prisma.vesselClass.findUniqueOrThrow({
      where: { id },
      include: { vessels: true },
    });
  }

  async vesselClasses(): Promise<VesselClassWithRelation[]> {
    return this.prisma.vesselClass.findMany({
      include: { vessels: true },
    });
  }

  async createVesselClass(data: CreateVesselClassDto): Promise<VesselClass> {
    return this.prisma.vesselClass.create({
      data,
    });
  }

  async updateVesselClass(id: number, data: UpdateVesselClassDto): Promise<VesselClass> {
    return this.prisma.vesselClass.update({
      where: { id },
      data,
    });
  }

  async deleteVesselClass(id: number): Promise<VesselClass> {
    return this.prisma.vesselClass.delete({
      where: { id },
    });
  }
}
