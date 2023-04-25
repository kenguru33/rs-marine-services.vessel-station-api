import { Injectable } from '@nestjs/common';
import { CreateStationDto } from './dto/createStation.dto';
import { UpdateStationDto } from './dto/updateStation.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Station } from '@prisma/client';

@Injectable()
export class StationService {
  constructor(private prisma: PrismaService) {}

  async getStation(id: number): Promise<Station> {
    return this.prisma.station.findUnique({
      where: { id },
    });
  }
  async getStations(): Promise<Station[]> {
    return this.prisma.station.findMany({});
  }

  async createStation(data: CreateStationDto): Promise<Station> {
    return this.prisma.station.create({
      data,
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