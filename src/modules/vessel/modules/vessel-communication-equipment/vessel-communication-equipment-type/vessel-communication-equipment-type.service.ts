import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../database/prisma.service';
import { CreateVesselCommunicationEquipmentTypeDto } from './dto/create-vessel-communication-equipment-type';
import { UpdateVesselCommunicationEquipmentTypeDto } from './dto/update-vessel-communication-equipment-type';
import { QueryVesselCommunicationEquipmentTypeIncludeDto } from './dto/query-vessel-communication-equipment-type-include.dto';
import { QueryVesselCommunicationEquipmentTypeFilterDto } from './dto/query-vessel-communication-equipment-type-filter.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class VesselCommunicationEquipmentTypeService {
  constructor(private prisma: PrismaService) {}

  async getVesselCommunicationEquipmentTypes(
    queryInclude: QueryVesselCommunicationEquipmentTypeIncludeDto,
    queryFilter: QueryVesselCommunicationEquipmentTypeFilterDto,
  ) {
    const vesselCommunicationEquipmentTypeIncludes =
      await this.prisma.parseInclude<Prisma.VesselCommunicationEquipmentTypeInclude>(
        queryInclude.include,
      );
      console.log(vesselCommunicationEquipmentTypeIncludes);
    return this.prisma.vesselCommunicationEquipmentType.findMany({
      include: vesselCommunicationEquipmentTypeIncludes,
      where: {
        name: {
          equals: queryFilter.name,
        },
      },
    });
  }

  async getVesselCommunicationEquipmentType(id: number, queryInclude: QueryVesselCommunicationEquipmentTypeIncludeDto) {
    return this.prisma.vesselCommunicationEquipmentType.findUniqueOrThrow({
      where: { id },
    });
  }

  async createVesselCommunicationEquipmentType(
    data: CreateVesselCommunicationEquipmentTypeDto,
    queryInclude: QueryVesselCommunicationEquipmentTypeIncludeDto,
  ) {
    return this.prisma.vesselCommunicationEquipmentType.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
  }

  async updateVesselCommunicationEquipmentType(
    id: number,
    data: UpdateVesselCommunicationEquipmentTypeDto,
    queryInclude: QueryVesselCommunicationEquipmentTypeIncludeDto,
  ) {
    return this.prisma.vesselCommunicationEquipmentType.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
      },
      include: {
        communicationEquipments: true,
      },
    });
  }

  async deleteVesselCommunicationEquipmentType(id: number) {
    return this.prisma.vesselCommunicationEquipmentType.delete({
      where: { id },
    });
  }
}
