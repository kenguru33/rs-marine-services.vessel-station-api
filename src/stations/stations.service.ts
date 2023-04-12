import { Injectable } from '@nestjs/common';
import { CreateStationDto } from './dto/createStation.dto';
import { UpdateStationDto } from './dto/updateStation.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class StationsService {
  constructor(private prisma: PrismaService) {}

  async station(id: number) {
    return this.prisma.station.findUnique({
      where: { id },
      include: {
        vessels: {
          include: { class: true, capabilities: true, state: true },
        },
      },
    });
  }
  async stations() {
    return this.prisma.station.findMany({
      include: {
        vessels: {
          include: { class: true, capabilities: true, state: true },
        },
      },
    });
  }

  async createStation(data: CreateStationDto) {
    return this.prisma.station.create({
      data,
      include: {
        vessels: {
          include: { class: true, capabilities: true, state: true },
        },
      },
    });
  }

  async deleteStation(id: number) {
    return this.prisma.station.delete({
      where: { id },
      include: {
        vessels: {
          include: { class: true, capabilities: true, state: true },
        },
      },
    });
  }

  async updateStation(id: number, data: UpdateStationDto) {
    return this.prisma.station.update({
      where: { id },
      data,
      include: {
        vessels: {
          include: { class: true, capabilities: true, state: true },
        },
      },
    });
  }
}
