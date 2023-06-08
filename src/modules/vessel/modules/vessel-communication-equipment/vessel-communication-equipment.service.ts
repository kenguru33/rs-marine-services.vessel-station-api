import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { QueryVesselCommunicationEquipmentFilterDto } from './dto/query-vessel-communication-equipment-filter.dto';
import { Prisma } from '@prisma/client';
import { CreateVesselCommunicationEquipmentDto } from './dto/create-vessel-communication-equipment.dto';
import { UpdateVesselCommunicationEquipmentDto } from './dto/update-vessel-comm-equip.dto';
import { QueryVesselCommunicationEquipmentIncludeDto } from './dto/query-vessel-communication-equipment-include.dto';

@Injectable()
export class VesselCommEquipService {
  constructor(private prisma: PrismaService) {}

  async getVesselCommunicationEquipments(
    queryInclude: QueryVesselCommunicationEquipmentIncludeDto,
    queryFilter: QueryVesselCommunicationEquipmentFilterDto,
  ) {
    const vesselCommunicationEquipmentIncludes =
      await this.prisma.parseInclude<Prisma.VesselCommunicationEquipmentInclude>(
        queryInclude.include,
      );
    return this.prisma.vesselCommunicationEquipment.findMany({
      include: vesselCommunicationEquipmentIncludes,
      where: {
        type: {
          name: {
            contains: queryFilter.type,
          },
        },
      },
    });
  }

  async getVesselCommunicationEquipment(
    id: number,
    query: QueryVesselCommunicationEquipmentIncludeDto,
  ) {
    console.log('id', id);
    const vesselVesselCommunicationEquipmentIncludes =
      await this.prisma.parseInclude<Prisma.VesselCommunicationEquipmentInclude>(
        query.include,
      );
    return this.prisma.vesselCommunicationEquipment.findUniqueOrThrow({
      where: { id },
      include: vesselVesselCommunicationEquipmentIncludes,
    });
  }

  async createVesselCommunicationEquipment(
    data: CreateVesselCommunicationEquipmentDto,
    query: QueryVesselCommunicationEquipmentIncludeDto,
  ) {
    const vesselCommunicationEquipmentIncludes =
      await this.prisma.parseInclude<Prisma.VesselCommunicationEquipmentInclude>(
        query.include,
      );
    return this.prisma.vesselCommunicationEquipment.create({
      data: {
        numberOfUnits: data.numberOfUnits,
        description: data.description,
        vessel: {
          connect: {
            id: data.vesselId,
          },
        },
        type: {
          connect: {
            id: data.typeId,
          },
        },
      },
      include: vesselCommunicationEquipmentIncludes,
    });
  }

  async updateVesselCommunicationEquipment(
    id: number,
    data: UpdateVesselCommunicationEquipmentDto,
    query: QueryVesselCommunicationEquipmentIncludeDto,
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
