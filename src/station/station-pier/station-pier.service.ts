import { Injectable } from '@nestjs/common';
import { CreateStationPierDto } from './dto/create-station-pier.dto';
import { UpdateStationPierDto } from './dto/update-station-pier.dto';
import { PrismaService } from '../../database/prisma.service';
import { QueryStationPierDto } from './dto/query-station-pier.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class StationPierService {
  constructor(private prisma: PrismaService) {}

  async getStationPier(id: number, query: QueryStationPierDto) {
    return this.prisma.stationPier.findUniqueOrThrow({
      where: { id },
    });
  }

  async getStationPiers(query: QueryStationPierDto) {
    const { include, ...filter } = query;
    const stationPierIncludes =
      await this.prisma.parseInclude<Prisma.StationPierInclude>(include);
    return this.prisma.stationPier.findMany({
      include: stationPierIncludes,
      where: {
        type: {
          name: filter.type ? filter.type : undefined,
        },
      },
    });
  }

  async createStationPier(
    data: CreateStationPierDto,
    query: QueryStationPierDto,
  ) {
    const stationPierIncludes =
      await this.prisma.parseInclude<Prisma.StationPierInclude>(query.include);
    return this.prisma.stationPier.create({
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

  async updateStationPier(
    id: number,
    data: UpdateStationPierDto,
    query: QueryStationPierDto,
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
}
