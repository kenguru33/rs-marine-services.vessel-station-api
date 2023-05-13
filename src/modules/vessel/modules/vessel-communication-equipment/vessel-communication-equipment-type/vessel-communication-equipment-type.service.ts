import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../database/prisma.service';
import { CreateVesselCommunicationEquipmentTypeDto } from './dto/create-vessel-communication-equipment-type';
import { UpdateVesselCommunicationEquipmentTypeDto } from './dto/update-vessel-communication-equipment-type';

@Injectable()
export class VesselCommunicationEquipmentTypeService {
  constructor(private prisma: PrismaService) {}

  async getVesselCommunicationEquipmentTypes() {
    return this.prisma.vesselCommunicationEquipmentType.findMany();
  }

  async getVesselCommunicationEquipmentType(id: number) {
    return this.prisma.vesselCommunicationEquipmentType.findUnique({
      where: { id },
    });
  }

  async createVesselCommunicationEquipmentType(data: CreateVesselCommunicationEquipmentTypeDto) {
    return this.prisma.vesselCommunicationEquipmentType.create({
      data,
    });
  }

  async updateVesselCommunicationEquipmentType(id: number, data: UpdateVesselCommunicationEquipmentTypeDto) {
    return this.prisma.vesselCommunicationEquipmentType.update({
      where: { id },
      data,
    });
  }

  async deleteVesselCommunicationEquipmentType(id: number) {
    return this.prisma.vesselCommunicationEquipmentType.delete({
      where: { id },
    });
  }
}
