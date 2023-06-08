import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../../database/prisma.service';
import { CreateStationAccommodationDto } from './dto/create-station-accommodation.dto';
import { UpdateStationAccommodationDto } from './dto/update-station-apartment.dto';
import { QueryStationAccommodationIncludeDto } from './dto/query-station-accommodation-include.dto';
import { QueryStationAccommodationFilterDto } from './dto/query-station-accommodation-filter.dto';

@Injectable()
export class StationAccommodationService {
  constructor(private prisma: PrismaService) {}

  async getStationAccommodation(
    id: number,
    queryInclude: QueryStationAccommodationIncludeDto,
  ) {
    const stationAccommodationInclude =
      await this.prisma.parseInclude<Prisma.StationAccommodationInclude>(
        queryInclude.include,
      );
    return this.prisma.stationAccommodation.findUniqueOrThrow({
      where: { id },
      include: stationAccommodationInclude,
    });
  }

  async getStationAccommodations(
    queryInclude: QueryStationAccommodationIncludeDto,
    queryFilter: QueryStationAccommodationFilterDto,
  ) {
    const stationAccommodationInclude =
      await this.prisma.parseInclude<Prisma.StationAccommodationInclude>(
        queryInclude.include,
      );
    return this.prisma.stationAccommodation.findMany({
      include: stationAccommodationInclude,
      where: {
        type: {
          name: queryFilter.type ? { contains: queryFilter.type } : undefined,
        },
      },
    });
  }

  async createStationAccommodation(
    data: CreateStationAccommodationDto,
    queryInclude: QueryStationAccommodationIncludeDto,
  ) {
    const stationAccommodationInclude =
      await this.prisma.parseInclude<Prisma.StationAccommodationInclude>(
        queryInclude.include,
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

  async updateStationAccommodation(
    id: number,
    data: UpdateStationAccommodationDto,
    queryInclude: QueryStationAccommodationIncludeDto,
  ) {
    const stationAccommodationInclude =
      await this.prisma.parseInclude<Prisma.StationAccommodationInclude>(
        queryInclude.include,
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

  async deleteStationAccommodation(id: number) {
    return this.prisma.stationAccommodation.delete({
      where: {
        id,
      },
    });
  }
}
