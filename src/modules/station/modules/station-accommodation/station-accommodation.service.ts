import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../../database/prisma.service';
import { CreateStationAccommodationDto } from './dto/create-station-accommodation.dto';
import { QueryStationAccommodationDto } from './dto/query-station-accommodation.dto';
import { UpdateStationAccommodationDto } from './dto/update-station-apartment.dto';

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
      data: {
        type: {
          connect: {
            id: data.typeId,
          },
        },
        station: {
          connect: {
            id: data.stationId,
          },
        },
        address: data.address,
        description: data.description,
        postalLocation: data.postalLocation,
        postalCode: data.postalCode,
        postalBox: data.postalBox,
        latitude: data.latitude,
        longitude: data.longitude,
      },
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
      data: {
        type: {
          connect: {
            id: data.typeId,
          },
        },
        station: {
          connect: {
            id: data.stationId,
          },
        },
        address: data.address,
        description: data.description,
        postalLocation: data.postalLocation,
        postalCode: data.postalCode,
        postalBox: data.postalBox,
        latitude: data.latitude,
        longitude: data.longitude,
      },
      include: stationAccommodationInclude,
    });
  }
}
