import { Injectable } from '@nestjs/common';
import { CreateVesselClassDto } from './dto/createVesselClass.dto';
import { UpdateVesselClassDto } from './dto/updateVesselClass.dto';
import { Prisma, VesselClass } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';

export type VesselClassWithRelation = Prisma.VesselClassGetPayload<{
  include: {
    vessels: {
      include: { class: true; capabilities: true; subState: true };
    };
  };
}>;

@Injectable()
export class VesselClassService {
  constructor(private prisma: PrismaService) {}

  async vesselClass(id: number): Promise<VesselClass> {
    return this.prisma.vesselClass.findUniqueOrThrow({
      where: { id },
    });
  }

  async vesselClasses(): Promise<VesselClass[]> {
    return this.prisma.vesselClass.findMany();
  }

  async createVesselClass(data: CreateVesselClassDto): Promise<VesselClass> {
    return this.prisma.vesselClass.create({
      data,
    });
  }

  async updateVesselClass(
    id: number,
    data: UpdateVesselClassDto,
  ): Promise<VesselClass> {
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
