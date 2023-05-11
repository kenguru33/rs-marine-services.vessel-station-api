import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { QueryVesselCommunicationEquipmentDto } from './dto/query-vessel-communication-equipment.dto';
import { Prisma } from '@prisma/client';
import { CreateVesselCommunicationEquipmentDto } from './dto/create-vessel-communication-equipment.dto';
import { UpdateVesselCommunicationEquipmentDto } from './dto/update-vessel-communication-equipment.dto';

@Injectable()
export class VesselCommunicationEquipmentService {
  constructor(private prisma: PrismaService) {}

  async getVesselCommunicationEquipments(
    query: QueryVesselCommunicationEquipmentDto,
  ) {
    const { include, ...where } = query;
    const vesselCommunicationEquipmentIncludes =
      await this.prisma.parseInclude<Prisma.VesselCommunicationEquipmentInclude>(include);
    return this.prisma.vesselCommunicationEquipment.findMany({
      include: vesselCommunicationEquipmentIncludes,
      where: {
        
      }
    });
  }

  async getVesselCommunicationEquipment(
    id: number,
    query: QueryVesselCommunicationEquipmentDto,
  ) {
    console.log('id', id);
    const vesselBuildInfoIncludes =
      await this.prisma.parseInclude<Prisma.VesselCommunicationEquipmentInclude>(
        query.include,
      );
    return this.prisma.vesselCommunicationEquipment.findUniqueOrThrow({
      where: { id },
      include: vesselBuildInfoIncludes,
    });
  }

  async createVesselCommunicationEquipment(
    data: CreateVesselCommunicationEquipmentDto,
    query: QueryVesselCommunicationEquipmentDto,
  ) {
    const vesselBuildInfoIncludes =
      await this.prisma.parseInclude<Prisma.VesselCommunicationEquipmentInclude>(
        query.include,
      );
    return this.prisma.vesselCommunicationEquipment.create({
      data,
      include: vesselBuildInfoIncludes,
    });
  }

  async updateVesselCommunicationEquipment(
    id: number,
    data: UpdateVesselCommunicationEquipmentDto,
    query: QueryVesselCommunicationEquipmentDto,
  ) {
    const vesselCommunicationEquipment =
      await this.prisma.parseInclude<Prisma.VesselCommunicationEquipmentInclude>(
        query.include,
      );
    return this.prisma.vesselCommunicationEquipment.update({
      where: { id },
      data,
      include: vesselCommunicationEquipment,
    });
  }

  async deleteVesselCommunicationEquipment(id: number) {
    return this.prisma.vesselCommunicationEquipment.delete({
      where: { id },
    });
  }
}
