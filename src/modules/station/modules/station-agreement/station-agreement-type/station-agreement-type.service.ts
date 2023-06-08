import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../database/prisma.service';
import { CreateStationAgreementTypeDto } from './dto/create-station-agreement-type.dto';
import { UpdateStationAgreementTypeDto } from './dto/update-station-agreement-type.dto';
import { QueryStationAgreementTypeIncludeDto } from './dto/query-station-agreement-type-include.dto';
import { QueryStationAgreementTypeFilterDto } from './dto/query-station-agreement-type-filter.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class StationAgreementTypeService {
  constructor(private prisma: PrismaService) {}

  async getStationAgreementTypes(
    queryInclude: QueryStationAgreementTypeIncludeDto,
    queryFilter: QueryStationAgreementTypeFilterDto,
  ) {
    const stationAgreementTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementTypeInclude>(
        queryInclude.include,
      );
    return await this.prisma.stationAgreementType.findMany({
      include: stationAgreementTypeIncludes,
      where: {
        name: {
          contains: queryFilter.name,
        },
      },
    });
  }

  async getStationAgreementType(
    id: number,
    queryInclude: QueryStationAgreementTypeIncludeDto,
  ) {
    const stationAgreementTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementTypeInclude>(
        queryInclude.include,
      );
    return await this.prisma.stationAgreementType.findUnique({
      where: { id },
    });
  }

  async createStationAgreementType(
    data: CreateStationAgreementTypeDto,
    queryInclude: QueryStationAgreementTypeIncludeDto,
  ) {
    const stationAgreementTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementTypeInclude>(
        queryInclude.include,
      );
    return await this.prisma.stationAgreementType.create({
      data: {
        name: data.name,
        description: data?.description,
      },
      include: stationAgreementTypeIncludes,
    });
  }

  async updateStationAgreementType(
    id: number,
    data: UpdateStationAgreementTypeDto,
    queryInclude: QueryStationAgreementTypeIncludeDto,
  ) {
    const stationAgreementTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementTypeInclude>(
        queryInclude.include,
      );
    return await this.prisma.stationAgreementType.update({
      where: { id },
      data: {
        name: data.name,
        description: data?.description,
      },
      include: stationAgreementTypeIncludes,
    });
  }

  async deleteStationAgreementType(id: number) {
    return await this.prisma.stationAgreementType.delete({
      where: { id },
    });
  }
}
