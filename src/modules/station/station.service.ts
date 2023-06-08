import { Injectable, Query } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Prisma, Station } from '@prisma/client';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { QueryStationFilterDto } from './dto/query-station-filter.dto';
import { QueryStationIncludeDto } from './dto/query-station-include.dto';
import { connect } from 'http2';

type stationWithRelation = Prisma.StationGetPayload<{
  include: {
    type?: true;
    vessel: {
      include: {
        capabilities?: true;
        class?: true;
        station?: true;
        state?: {
          include: {
            stateCategory?: true;
          };
        };
        type?: true;
      };
    };
    accommodations?: {
      include: {
        type?: true;
      };
    };
  };
}>;

@Injectable()
export class StationService {
  constructor(private prisma: PrismaService) {}

  async getStation(id: number, queryInclude: QueryStationIncludeDto) {
    const stationIncludes =
      await this.prisma.parseInclude<Prisma.StationInclude>(
        queryInclude.include,
      );
    const station = await this.prisma.station.findUniqueOrThrow({
      where: { id },
      include: stationIncludes,
    });

    return station;
  }
  async getStations(
    queryInclude: QueryStationIncludeDto,
    queryFilter: QueryStationFilterDto,
  ): Promise<Station[]> {
    const stationIncludes =
      await this.prisma.parseInclude<Prisma.StationInclude>(
        queryInclude.include,
      );

    return this.prisma.station.findMany({
      where: {
        name: queryFilter.name ? { contains: queryFilter.name } : undefined,
        type: {
          name: queryFilter.type
            ? {
                contains: queryFilter.type,
              }
            : undefined,
        },
      },
      include: stationIncludes,
    });
  }

  async createStation(
    data: CreateStationDto,
    queryInclude: QueryStationIncludeDto,
  ) {
    const stationIncludes =
      await this.prisma.parseInclude<Prisma.StationInclude>(
        queryInclude.include,
      );
    return this.prisma.station.create({
      data: {
        name: data.name,
        type: {
          connect: {
            id: data.typeId,
          },
        },
        address: data.address,
        postalCode: data.postalCode,
        postalLocation: data.postalLocation,
        postalBox: data.postalBox,
        postalDelivery: data.postalDelivery,
        latitude: data.latitude,
        longitude: data.longitude,
      },
      include: stationIncludes,
    });
  }

  async updateStation(
    id: number,
    data: UpdateStationDto,
    queryInclude: QueryStationIncludeDto,
  ) {
    const stationIncludes =
      await this.prisma.parseInclude<Prisma.StationInclude>(
        queryInclude.include,
      );
    return this.prisma.station.update({
      where: { id },
      data: {
        name: data.name,
        type: {
          connect: data.typeId ? { id: data.typeId } : undefined,
        },
        address: data.address,
        postalCode: data.postalCode,
        postalLocation: data.postalLocation,
        postalBox: data.postalBox,
        postalDelivery: data.postalDelivery,
        latitude: data.latitude,
        longitude: data.longitude,
      },
      include: stationIncludes,
    });
  }

  async deleteStation(id: number): Promise<Station> {
    return this.prisma.station.delete({
      where: { id },
    });
  }
}
