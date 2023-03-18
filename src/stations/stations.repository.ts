import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateStationDto } from './dto/createStation.dto';

@Injectable()
export class StationsRepository {
  constructor(private prisma: PrismaService) {}

  async station(id: number) {
    return this.prisma.station.findUnique({
      where: { id },
      include: { vessels: true },
    });
  }

  async stations() {
    return this.prisma.station.findMany({
      include: {
        vessels: {
          include: { vesselClass: true, capabilities: true, state: true },
        },
      },
    });
  }

  async createStation(data: Prisma.StationCreateInput) {
    console.log('data', data);
    return this.prisma.station.create({
      data,
      include: { vessels: true },
    });
  }

  async deleteStation(id: number) {
    return this.prisma.station.delete({
      where: {
        id,
      },
    });
  }

  async updateStation(params: {
    id: number;
    data: Prisma.StationUpdateInput;
  }) {
    const { id, data } = params;
    return this.prisma.station.update({
      where: {
        id,
      },
      data,
      include: { vessels: true },
    });
  }
}
