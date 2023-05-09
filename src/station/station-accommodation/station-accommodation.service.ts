import { Injectable, Query } from '@nestjs/common';
import { CreateStationAccommodationDto } from './dto/create-station-apartment.dto';
import { UpdateStationAccommodationDto } from './dto/update-station-apartment.dto';
import { PrismaService } from '../../database/prisma.service';
import { QueryStationAccommodationDto } from './dto/query-station-accommodation.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class StationAccommodationService {
  constructor(private prisma: PrismaService) {}

  async getStationAccommodation(
    id: number,
    query: QueryStationAccommodationDto,
  ) {
    const stationAccommodationInclude =
      await this.prisma.parseInclude<Prisma.StationAccommodationInclude>(
        query.include,
      );
    return this.prisma.stationAccommodation.findUniqueOrThrow({
      where: { id },
      include: stationAccommodationInclude,
    });
  }
  async getStationAccommodations(query: QueryStationAccommodationDto) {
    const { include, ...filter } = query;
    const stationAccommodationInclude =
      await this.prisma.parseInclude<Prisma.StationAccommodationInclude>(
        include,
      );
    return this.prisma.stationAccommodation.findMany({
      include: stationAccommodationInclude,
      where: {
        type: {
          name: filter.type ? { contains: filter.type } : undefined,
        },
      },
    });
  }

  async createStationAccommodation(
    data: CreateStationAccommodationDto,
    query: QueryStationAccommodationDto,
  ) {
    const stationAccommodationInclude =
      await this.prisma.parseInclude<Prisma.StationAccommodationInclude>(
        query.include,
      );
    return this.prisma.stationAccommodation.create({
      data: data,
      include: stationAccommodationInclude,
    });
  }

  async deleteStationAccommodation(id: number) {
    return this.prisma.stationAccommodation.delete({
      where: {
        id,
      },
    });
  }

  async updateStationAccommodation(
    id: number,
    data: UpdateStationAccommodationDto,
    query: QueryStationAccommodationDto,
  ) {
    const stationAccommodationInclude =
      await this.prisma.parseInclude<Prisma.StationAccommodationInclude>(
        query.include,
      );
    return this.prisma.stationAccommodation.update({
      where: {
        id,
      },
      data: data,
      include: stationAccommodationInclude,
    });
  }
}
