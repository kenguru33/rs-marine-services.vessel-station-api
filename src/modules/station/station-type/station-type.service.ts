import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../database/prisma.service';
import { CreateStationTypeDto } from './dto/create-station-type.dto';
import { QueryStationTypeFilterDto } from './dto/query-station-type-filter.dto';
import { QueryStationTypeIncludeDto } from './dto/query-station-type-incldue.dto';
import { UpdateStationTypeDto } from './dto/update-station-type.dto';

@Injectable()
export class StationTypeService {
  constructor(private prisma: PrismaService) {}

  async getStationTypes(
    queryInclude: QueryStationTypeIncludeDto,
    queryFilter: QueryStationTypeFilterDto,
  ) {
    const stationTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationTypeInclude>(
        queryInclude.include,
      );
    const types = await this.prisma.stationType.findMany({
      include: stationTypeIncludes,
      where: {
        name: {
          equals: queryFilter.name,
        },
      },
    });
    return types;
  }

  async getStationType(id: number, queryInclude: QueryStationTypeIncludeDto) {
    const stationTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationTypeInclude>(
        queryInclude.include,
      );
    return this.prisma.stationType.findUnique({
      where: { id },
      include: stationTypeIncludes,
    });
  }

  async createStationType(
    data: CreateStationTypeDto,
    queryInclude: QueryStationTypeIncludeDto,
  ) {
    const stationTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationTypeInclude>(
        queryInclude.include,
      );
    return this.prisma.stationType.create({
      data: data,
      include: stationTypeIncludes,
    });
  }

  async updateStationType(
    id: number,
    data: UpdateStationTypeDto,
    queryInclude: QueryStationTypeIncludeDto,
  ) {
    const stationTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationTypeInclude>(
        queryInclude.include,
      );
    return this.prisma.stationType.update({
      where: { id },
      data,
      include: stationTypeIncludes,
    });
  }

  async deleteStationType(id: number) {
    return this.prisma.stationType.delete({
      where: { id },
    });
  }
}
