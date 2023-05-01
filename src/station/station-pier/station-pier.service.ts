import { Injectable } from '@nestjs/common';
import { CreateStationPierDto } from './dto/create-station-pier.dto';
import { UpdateStationPierDto } from './dto/update-station-pier.dto';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class StationPierService {
  constructor(private prisma: PrismaService) {}

  async getStationPier(id: number) {
    return this.prisma.stationPier.findUniqueOrThrow({
      where: { id },
    });
  }

  async getStationPiers() {
    return this.prisma.stationPier.findMany();
  }

  async createStationPier(data: CreateStationPierDto) {
    return this.prisma.stationPier.create({
      data: data,
    });
  }

  async deleteStationPier(id: number) {
    return this.prisma.stationPier.delete({
      where: {
        id,
      },
    });
  }

  async updateStationPier(id: number, data: UpdateStationPierDto) {
    return this.prisma.stationPier.update({
      where: {
        id,
      },
      data: data,
    });
  }
}
