import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Prisma, Station } from '@prisma/client';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/updateStation.dto';
import { QueryStationDto } from './dto/query-station.dto';

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
      where,
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
