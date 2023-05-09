import { Injectable } from '@nestjs/common';
import { UpdateeStationAccommodationTypeDto } from './dto/update-station-accommodation-type.dto';
import { CreateStationAccommodationTypeDto } from './dto/create-station-accommodation-type.dto';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class StationAccommodationTypeService {
  constructor(private prisma: PrismaService) {}

  async getStationAccommodationType(id: number) {
    return this.prisma.stationAccommodationType.findUniqueOrThrow({
      where: { id },
    });
  }

  async getStationAccommodationTypes() {
    return this.prisma.stationAccommodationType.findMany();
  }

  async createStationAccommodationType(
    data: CreateStationAccommodationTypeDto,
  ) {
    return this.prisma.stationAccommodationType.create({
      data: data,
    });
  }

  async deleteStationAccommodationType(id: number) {
    return this.prisma.stationAccommodationType.delete({
      where: {
        id,
      },
    });
  }

  async updateStationAccommodationType(
    id: number,
    data: UpdateeStationAccommodationTypeDto,
  ) {
    return this.prisma.stationAccommodationType.update({
      where: {
        id,
      },
      data: data,
    });
  }
}
