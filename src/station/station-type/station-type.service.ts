import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateStationTypeDto } from './dto/create-station-type.dto';
import { UpdateStationTypeDto } from './dto/update-station-type.dto';

@Injectable()
export class StationTypeService {
  constructor(private prisma: PrismaService) {}

  async getStationTypes() {
    return this.prisma.stationType.findMany();
  }

  async getStationType(id: number) {
    return this.prisma.stationType.findUnique({
      where: { id },
    });
  }

  async createStationType(data: CreateStationTypeDto) {
    return this.prisma.stationType.create({
      data: data,
    });
  }

  async updateStationType(id: number, data: UpdateStationTypeDto) {
    return this.prisma.stationType.update({
      where: { id },
      data,
    });
  }

  async deleteStationType(id: number) {
    return this.prisma.stationType.delete({
      where: { id },
    });
  }
}
