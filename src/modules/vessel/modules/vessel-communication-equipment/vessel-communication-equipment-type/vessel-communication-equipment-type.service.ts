import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../database/prisma.service';
import { CreateVesselCommunicationEquipmentTypeDto } from './dto/create-vessel-communication-equipment-type';
import { UpdateVesselCommunicationEquipmentTypeDto } from './dto/update-vessel-communication-equipment-type';

@Injectable()
export class VesselCommunicationEquipmentTypeService {
  constructor(private prisma: PrismaService) {}

  async getVesselCommunicationEquipmentTypes() {
    this.prisma.vesselCommunicationEquipmentType.findMany();
  }

  async getVesselCommunicationEquipmentType(id: number) {
    this.prisma.vesselCommunicationEquipmentType.findUnique({
      where: { id },
    });
  }

  async createVesselCommunicationEquipmentType(data: CreateVesselCommunicationEquipmentTypeDto) {
    this.prisma.vesselCommunicationEquipmentType.create({
      data,
    });
  }

  async updateVesselCommunicationEquipmentType(id: number, data: UpdateVesselCommunicationEquipmentTypeDto) {
    this.prisma.vesselCommunicationEquipmentType.update({
      where: { id },
      data,
    });
  }

  async deleteVesselCommunicationEquipmentType(id: number) {
    this.prisma.vesselCommunicationEquipmentType.delete({
      where: { id },
    });
  }
}
