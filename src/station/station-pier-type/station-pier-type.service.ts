import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateStationPierTypeDto } from './dto/create-station-pier-typer.dto';
import { UpdateStationPierTypeDto } from './dto/update-station-pier-type.dto';

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
    console.log(data);
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
    console.log(data);
    return this.prisma.stationPierType.update({
      where: {
        id,
      },
      data,
    });
  }
}
