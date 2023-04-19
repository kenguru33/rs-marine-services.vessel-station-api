import { Injectable } from '@nestjs/common';
import { VesselCapability, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateVesselCapabilityDto } from './dto/createVesselCapability.dto';
import { UpdateVesselCapabilityDto } from './dto/updateVesselCapability.dto';

@Injectable()
export class VesselCapabilitiesService {
  constructor(private prisma: PrismaService) {}

  async capability(id: number): Promise<VesselCapability> {
    return this.prisma.vesselCapability.findUniqueOrThrow({
      where: { id },
      include: { vessels: true },
    });
  }

  async capabilities(): Promise<VesselCapability[]> {
    return this.prisma.vesselCapability.findMany({
      include: { vessels: true },
    });
  }
  

  async createCapability(data: CreateVesselCapabilityDto) {
    return this.prisma.vesselCapability.create({
      data,
    });
  }

  async updateCapability(id: number, data: UpdateVesselCapabilityDto) {
    return this.prisma.vesselCapability.update({data, where: {id}});
  }

  async deleteCapability(id: number) {
    return this.prisma.vesselCapability.delete({
      where: { id },
    });
  }
}
