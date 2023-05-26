import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../database/prisma.service';
import { CreateVesselCommunicationEquipmentTypeDto } from './dto/create-vessel-communication-equipment-type';
import { UpdateVesselCommunicationEquipmentTypeDto } from './dto/update-vessel-communication-equipment-type';

@Injectable()
export class VesselCommunicationEquipmentTypeService {
  constructor(private prisma: PrismaService) {}

  async getVesselCommEquipTypes() {
    return this.prisma.vesselCommunicationEquipmentType.findMany();
  }

  async getVesselCommEquipType(id: number) {
    return this.prisma.vesselCommunicationEquipmentType.findUniqueOrThrow({
      where: { id },
    });
  }

  async createVesselCommEquipType(
    data: CreateVesselCommunicationEquipmentTypeDto,
  ) {
    return this.prisma.vesselCommunicationEquipmentType.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
  }

  async updateVesselCommEquipType(
    id: number,
    data: UpdateVesselCommunicationEquipmentTypeDto,
  ) {
    return this.prisma.vesselCommunicationEquipmentType.update({
      where: { id },
      data,
    });
  }

  async deleteVesselCommEquipType(id: number) {
    return this.prisma.vesselCommunicationEquipmentType.delete({
      where: { id },
    });
  }
}
