import { Injectable } from '@nestjs/common';
import { UpdateeStationAccommodationTypeDto } from './dto/update-station-accommodation-type.dto';
import { CreateStationAccommodationTypeDto } from './dto/create-station-accommodation-type.dto';
import { PrismaService } from '../../../../../database/prisma.service';
import { QueryStationAccommodationTypeIncludeDto } from './dto/query-station-accommodation-type-include.dto';
import { Prisma } from '@prisma/client';
import { QueryStationAccommodationTypeFilterDto } from './dto/query-station-accommodation-type-filter.dto';

@Injectable()
export class StationAccommodationTypeService {
  constructor(private prisma: PrismaService) {}

  async getStationAccommodationType(
    id: number,
    queryInclude: QueryStationAccommodationTypeIncludeDto,
  ) {
    const stationAccommodationTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationAccommodationTypeInclude>(
        queryInclude.include,
      );
    return this.prisma.stationAccommodationType.findUniqueOrThrow({
      where: { id },
      include: stationAccommodationTypeIncludes,
    });
  }

  async getStationAccommodationTypes(
    queryInclude: QueryStationAccommodationTypeIncludeDto,
    queryFilter: QueryStationAccommodationTypeFilterDto,
  ) {
    const stationAccommodationTypes =
      await this.prisma.parseInclude<Prisma.StationAccommodationTypeInclude>(
        queryInclude.include,
      );
    return this.prisma.stationAccommodationType.findMany({
      include: stationAccommodationTypes,
      where: {
        name: {
          equals: queryFilter.name,
        },
      },
    });
  }

  async createStationAccommodationType(
    data: CreateStationAccommodationTypeDto,
    queryInclude: QueryStationAccommodationTypeIncludeDto,
  ) {
    const stationAccommodationTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationAccommodationTypeInclude>(
        queryInclude.include,
      );
    return this.prisma.stationAccommodationType.create({
      data: {
        name: data.name,
        description: data.description,
      },
      include: stationAccommodationTypeIncludes,
    });
  }

  async updateStationAccommodationType(
    id: number,
    data: UpdateeStationAccommodationTypeDto,
    queryInclude: QueryStationAccommodationTypeIncludeDto,
  ) {
    const stationAccommodationTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationAccommodationTypeInclude>(
        queryInclude.include,
      );
    return this.prisma.stationAccommodationType.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        description: data.description,
      },
      include: stationAccommodationTypeIncludes,
    });
  }

  async deleteStationAccommodationType(id: number) {
    return this.prisma.stationAccommodationType.delete({
      where: {
        id,
      },
    });
  }
}
