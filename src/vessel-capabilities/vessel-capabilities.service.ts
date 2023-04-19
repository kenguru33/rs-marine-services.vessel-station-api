import { Injectable } from '@nestjs/common';
import { VesselCapability, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateVesselCapabilityDto } from './dto/createVesselCapability.dto';

@Injectable()
export class VesselCapabilitiesService {
  constructor(private prisma: PrismaService) {}

  async capability(id: number): Promise<VesselCapability> {
    return this.prisma.vesselCapability.findUnique({
      where: { id },
      include: { vessels: true },
    });
  }

  // async capability(
  //   capabilityWhereUniqueInput: Prisma.VesselCapabilityWhereUniqueInput,
  // ) {
  //   return this.prisma.vesselCapability.findUnique({
  //     where: capabilityWhereUniqueInput,
  //   });
  // }

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
}
