import { Injectable, Query } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Prisma, Station } from '@prisma/client';
import { CreateStationDto } from './dto/request/create-station.dto';
import { UpdateStationDto } from './dto/request/update-station.dto';
import { QueryStationDto } from './dto/request/query-station.dto';

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

  async getStation(id: number): Promise<Station> {
    const station = await this.prisma.station.findUniqueOrThrow({
      where: { id },
    });

    return station;
  }
  async getStations(query: QueryStationDto): Promise<Station[]> {
    const { include, ...where } = query;
    const stationInclude =
      await this.prisma.parseInclude<Prisma.StationInclude>(include);

    return this.prisma.station.findMany({
      where: {
        name: where.name ? { contains: where.name } : undefined,
        type: {
          name: where.type
            ? {
                contains: where.type,
              }
            : undefined,
        },
      },
      include: stationInclude,
    });
  }

  async createStation(data: CreateStationDto): Promise<Station> {
    return this.prisma.station.create({
      data: data,
    });
  }

  async deleteStation(id: number): Promise<Station> {
    return this.prisma.station.delete({
      where: { id },
    });
  }

  async updateStation(id: number, data: UpdateStationDto): Promise<Station> {
    return this.prisma.station.update({
      where: { id },
      data,
    });
  }
}
