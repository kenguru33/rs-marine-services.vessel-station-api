import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateVesselTypeDto } from './dto/create-vessel-type.dto';
import { UpdateVesselTypeDto } from './dto/update-vessel-type.dto';

@Injectable()
export class VesselTypeService {
  constructor(private prisma: PrismaService) {}

  async getVesselTypes() {
    return this.prisma.vesselType.findMany();
  }

  async getVesselType(id: number) {
    return this.prisma.vesselType.findUniqueOrThrow({
      where: { id },
    });
  }

  async createVesselType(data: CreateVesselTypeDto) {
    return this.prisma.vesselType.create({
      data: data,
    });
  }

  async updateVesselType(id: number, data: UpdateVesselTypeDto) {
    return this.prisma.vesselType.update({
      where: { id },
      data,
    });
  }

  async deleteVesselType(id: number) {
    return this.prisma.vesselType.delete({
      where: { id },
    });
  }
}
