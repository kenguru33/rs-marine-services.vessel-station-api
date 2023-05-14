import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../database/prisma.service';
import { CreateVesselCommEquipTypeDto } from './dto/create-vessel-comm-equip-type';
import { UpdateVesselCommEquipTypeDto } from './dto/update-vessel-comm-equip-type';

@Injectable()
export class VesselCommEquipTypeService {
  constructor(private prisma: PrismaService) {}

  async getVesselCommEquipTypes() {
    return this.prisma.vesselCommunicationEquipmentType.findMany();
  }

  async getVesselCommEquipType(id: number) {
    return this.prisma.vesselCommunicationEquipmentType.findUnique({
      where: { id },
    });
  }

  async createVesselCommEquipType(data: CreateVesselCommEquipTypeDto) {
    return this.prisma.vesselCommunicationEquipmentType.create({
      data,
    });
  }

  async updateVesselCommEquipType(
    id: number,
    data: UpdateVesselCommEquipTypeDto,
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
