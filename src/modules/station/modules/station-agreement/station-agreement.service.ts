import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { CreateStationAgreementDto } from './dto/create-station-agreement.dto';
import { UpdateStationAgreementDto } from './dto/update-station-agreement.dto';
import { Prisma } from '@prisma/client';
import { QueryStationAgreementIncludeDto } from './dto/query-station-agreement-include.dto';
import { QueryStationAgreementFilterDto } from './dto/query-station-agreement-filter.dto';

@Injectable()
export class StationAgreementService {
  constructor(private prisma: PrismaService) {}

  async getStationAgreement(
    id: number,
    query: QueryStationAgreementIncludeDto,
  ) {
    const stationAgreementIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementInclude>(
        query.include,
      );
    return this.prisma.stationAgreement.findUniqueOrThrow({
      where: { id },
      include: stationAgreementIncludes,
    });
  }

  async getStationAgreements(queryInclude: QueryStationAgreementIncludeDto, queryFilter: QueryStationAgreementFilterDto) {
    const stationAgreementIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementInclude>(
        queryInclude.include,
      );
    return this.prisma.stationAgreement.findMany({
      include: stationAgreementIncludes,
      where: {}, // TODO: add filter
    });
  }

  async createStationAgreement(
    data: CreateStationAgreementDto,
    queryInclude: QueryStationAgreementIncludeDto,
  ) {
    const stationAgreementIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementInclude>(
        queryInclude.include,
      );
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
      include: stationAgreementIncludes,
    });
  }

  async deleteStationAgreement(id: number) {
    return this.prisma.stationAgreement.delete({
      where: {
        id,
      },
    });
  }

  async updateStationAgreement(
    id: number,
    data: UpdateStationAgreementDto,
    queryInclude: QueryStationAgreementIncludeDto,
  ) {
    const stationAgreementIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementInclude>(
        queryInclude.include,
      );
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
      include: stationAgreementIncludes,
    });
  }
}
