import { Injectable } from '@nestjs/common';
import { CreateStationPierTypeDto } from './dto/create-station-pier-typer.dto';
import { UpdateStationPierTypeDto } from './dto/update-station-pier-type.dto';
import { PrismaService } from '../../../../../database/prisma.service';

@Injectable()
export class StationPierTypeService {
  constructor(private prisma: PrismaService) {}

  async getStationPierType(id: number) {
    return this.prisma.stationPierType.findUniqueOrThrow({
      where: { id },
    });
  }

  async getStationPierTypes() {
    return this.prisma.stationPierType.findMany();
  }

  async createStationPierType(data: CreateStationPierTypeDto) {
    return this.prisma.stationPierType.create({
      data: data,
    });
  }

  async deleteStationPierType(id: number) {
    return this.prisma.stationPierType.delete({
      where: {
        id,
      },
    });
  }

  async updateStationPierType(id: number, data: UpdateStationPierTypeDto) {
    return this.prisma.stationPierType.update({
      where: {
        id,
      },
      data,
    });
  }
}
