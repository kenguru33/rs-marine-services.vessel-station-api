import { Injectable } from '@nestjs/common';
import { CreateStationPierDto } from './dto/create-station-pier.dto';
import { UpdateStationPierDto } from './dto/update-station-pier.dto';
import { PrismaService } from '../../../../database/prisma.service';
import { Prisma } from '@prisma/client';
import { QueryStationPierIncludeDto } from './dto/query-station-pier-include.dto';
import { QueryStationPierFilterDto } from './dto/query-station-pier-filter.dto';

@Injectable()
export class StationPierService {
  constructor(private prisma: PrismaService) {}

  async getStationPier(id: number, queryInclude: QueryStationPierIncludeDto) {
    const stationPierIncludes =
      await this.prisma.parseInclude<Prisma.StationPierInclude>(
        queryInclude.include,
      );
    return this.prisma.stationPier.findUniqueOrThrow({
      where: { id },
      include: stationPierIncludes,
    });
  }

  async getStationPiers(
    queryInclude: QueryStationPierIncludeDto,
    queryFilter: QueryStationPierFilterDto,
  ) {
    const stationPierIncludes =
      await this.prisma.parseInclude<Prisma.StationPierInclude>(
        queryInclude.include,
      );
    return this.prisma.stationPier.findMany({
      //include: stationPierIncludes,
      include: {
        station: true,
      },
      where: {
        type: {
          name: queryFilter.type ? queryFilter.type : undefined,
        },
      },
    });
  }

  async createStationPier(
    data: CreateStationPierDto,
    queryInclude: QueryStationPierIncludeDto,
  ) {
    const stationPierIncludes =
      await this.prisma.parseInclude<Prisma.StationPierInclude>(
        queryInclude.include,
      );
    return this.prisma.stationPier.create({
      data: data,
      include: stationPierIncludes,
    });
  }

  async updateStationPier(
    id: number,
    data: UpdateStationPierDto,
    query: QueryStationPierIncludeDto,
  ) {
    const stationPierIncludes =
      await this.prisma.parseInclude<Prisma.StationPierInclude>(query.include);
    return this.prisma.stationPier.update({
      where: {
        id,
      },
      data: data,
      include: stationPierIncludes,
    });
  }

  async deleteStationPier(id: number) {
    return this.prisma.stationPier.delete({
      where: {
        id,
      },
    });
  }
}
