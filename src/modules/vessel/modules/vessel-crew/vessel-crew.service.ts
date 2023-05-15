import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { UpdateVesselCrewDto } from './dto/update-vessel-crew.dto';
import { CreateVesselCrewDto } from './dto/create-vessel-crew.dto';

@Injectable()
export class VesselCrewService {
  constructor(private prisma: PrismaService) {}

  async getVesselCrews() {
    return await this.prisma.vesselCrew.findMany();
  }

  async getVesselCrew(id: number) {
    return await this.prisma.vesselCrew.findUnique({
      where: { id },
    });
  }

  async createVesselCrew(data: CreateVesselCrewDto) {
    return await this.prisma.vesselCrew.create({
      data: {
        name: data.name,
        title: data.title,
        vessel: {
          connect: data.vesselId ? { id: data.vesselId } : undefined,
        },
      },
    });
  }

  async updateVesselCrew(id: number, data: UpdateVesselCrewDto) {
    return await this.prisma.vesselCrew.update({
      where: { id },
      data: {
        name: data.name,
        title: data.title,
        vessel: {
          connect: { id: data.vesselId },
        },
      },
    });
  }

  async deleteVesselCrew(id: number) {
    return await this.prisma.vesselCrew.delete({
      where: { id },
    });
  }
}
