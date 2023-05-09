import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateStationAgreementDto } from './dto/create-station-agreement.dto';
import { UpdateStationAgreementDto } from './dto/update-station-agreement.dto';
import { QueryStationAgreementDto } from './dto/query-station-agreement.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class StationAgreementService {
  constructor(private prisma: PrismaService) {}

  async getStationAgreement(id: number) {
    return this.prisma.stationAgreement.findUniqueOrThrow({
      where: { id },
    });
  }

  async getStationAgreements(query: QueryStationAgreementDto) {
    const stationAgreementIncludes = await this.prisma.parseInclude<Prisma.StationAgreementInclude>(query.include);
    return this.prisma.stationAgreement.findMany({
      include: stationAgreementIncludes,
    });
  }

  async createStationAgreement(data: CreateStationAgreementDto) {
    return this.prisma.stationAgreement.create({
      data: {
        description: data.description,
        deliveryObligation: data.deliveryObligation,
        callOutTimeRequirement: data.callOutTimeRequirement,
        startDate: data.startDate ? new Date(data.startDate) : undefined,
        endDate: data.endDate ? new Date(data.endDate) : undefined,
        type: {
          connect: {
            id: data.typeId,
          },
        },
        customer: {
          connect: {
            id: data.customerId,
          },
        },
        stations: {
          connect: data.stationIds ? data.stationIds.map((id) => ({ id })) : [],
        },
        capabilities: {
          connect: data.capabilityIds
            ? data.capabilityIds.map((id) => ({ id }))
            : [],
        },
      },
    });
  }

  async deleteStationAgreement(id: number) {
    return this.prisma.stationAgreement.delete({
      where: {
        id,
      },
    });
  }

  async updateStationAgreement(id: number, data: UpdateStationAgreementDto) {
    return this.prisma.stationAgreement.update({
      where: {
        id,
      },
      data: {
        description: data.description,
        deliveryObligation: data.deliveryObligation,
        callOutTimeRequirement: data.callOutTimeRequirement,
        startDate: data.startDate ? new Date(data.startDate) : undefined,
        endDate: data.endDate ? new Date(data.endDate) : undefined,
        customerId: data.customerId,
        stations: {
          set: data.stationIds && data.stationIds.map((id) => ({ id })),
        },
        capabilities: {
          set: data.capabilityIds && data.capabilityIds.map((id) => ({ id })),
        },
      },
      include: {
        type: true,
        capabilities: true,
        stations: true,
        customer: true,
      },
    });
  }
}
