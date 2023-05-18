import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { QueryVesselCommEquipDto } from './dto/query-vessel-comm-equip.dto';
import { Prisma } from '@prisma/client';
import { CreateVesselCommEquipDto } from './dto/create-vessel-comm-equip.dto';
import { UpdateVesselCommEquipDto } from './dto/update-vessel-comm-equip.dto';

@Injectable()
export class VesselCommEquipService {
  constructor(private prisma: PrismaService) {}

  async getVesselCommunicationEquipments(query: QueryVesselCommEquipDto) {
    const { include, ...where } = query;
    console.log('where', where);
    const vesselCommunicationEquipmentIncludes =
      await this.prisma.parseInclude<Prisma.VesselCommunicationEquipmentInclude>(
        include,
      );
    return this.prisma.vesselCommunicationEquipment.findMany({
      include: vesselCommunicationEquipmentIncludes,
      where: {
        type: {
          name: {
            contains: where.type,
          },
        },
      },
    });
  }

  async getVesselCommunicationEquipment(
    id: number,
    query: QueryVesselCommEquipDto,
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
    data: CreateVesselCommEquipDto,
    query: QueryVesselCommEquipDto,
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
    data: UpdateVesselCommEquipDto,
    query: QueryVesselCommEquipDto,
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
