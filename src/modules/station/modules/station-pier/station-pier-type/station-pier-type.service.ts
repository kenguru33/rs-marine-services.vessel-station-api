import { Injectable } from '@nestjs/common';
import { CreateStationPierTypeDto } from './dto/create-station-pier-type.dto';
import { UpdateStationPierTypeDto } from './dto/update-station-pier-type.dto';
import { PrismaService } from '../../../../../database/prisma.service';
import { QueryStationPierTypeFilterDto } from './dto/query-station-pier-type-filter.dto';
import { QueryStationPierTypeIncludeDto } from './dto/query-station-pier-type-include.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class StationPierTypeService {
  constructor(private prisma: PrismaService) {}

  async getStationPierType(id: number) {
    return this.prisma.stationPierType.findUniqueOrThrow({
      where: { id },
    });
  }

  async getStationPierTypes(
    queryInclude: QueryStationPierTypeIncludeDto,
    queryFilter: QueryStationPierTypeFilterDto,
  ) {
    const stationPierTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationPierTypeInclude>(
        queryInclude.include,
      );
    return this.prisma.stationPierType.findMany({
      include: stationPierTypeIncludes,
      where: {
        name: {
          equals: queryFilter.name,
        },
      },
    });
  }

  async createStationPierType(data: CreateStationPierTypeDto) {
    return this.prisma.stationPierType.create({
      data: data,
    });
  }

  async deleteStationPierType(id: number) {
    return this.prisma.stationPierType.delete({
      where: {
        id,
      },
    });
  }

  async updateStationPierType(id: number, data: UpdateStationPierTypeDto) {
    return this.prisma.stationPierType.update({
      where: {
        id,
      },
      data,
    });
  }
}
