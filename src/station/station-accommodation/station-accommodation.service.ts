import { Injectable } from '@nestjs/common';
import { CreateStationAccommodationDto } from './dto/create-station-apartment.dto';
import { UpdateStationAccommodationDto } from './dto/update-station-apartment.dto';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class StationAccommodationService {
  constructor(private prisma: PrismaService) {}
  async getStationAccommodation(id: number) {
    return this.prisma.stationAccommodation.findUniqueOrThrow({
      where: { id },
    });
  }
  async getStationAccommodations() {
    return this.prisma.stationAccommodation.findMany();
  }

  async createStationAccommodation(data: CreateStationAccommodationDto) {
    return this.prisma.stationAccommodation.create({
      data: data,
    });
  }

  async deleteStationAccommodation(id: number) {
    return this.prisma.stationAccommodation.delete({
      where: {
        id,
      },
    });
  }

  async updateStationAccommodation(
    id: number,
    data: UpdateStationAccommodationDto,
  ) {
    return this.prisma.stationAccommodation.update({
      where: {
        id,
      },
      data: data,
    });
  }
}
