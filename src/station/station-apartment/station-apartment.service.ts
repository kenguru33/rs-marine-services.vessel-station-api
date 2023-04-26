import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateStationApartmentDto } from './dto/create-station-apartment.dto';
import { UpdateStationApartmentDto } from './dto/update-station-apartment.dto';

@Injectable()
export class StationApartmentService {
  constructor(private prisma: PrismaService) {}
  async getStationApartment(id: number) {
    return this.prisma.stationApartment.findUniqueOrThrow({
      where: { id },
    });
  }
  async getStationApartments() {
    return this.prisma.stationApartment.findMany();
  }

  async createStationApartment(data: CreateStationApartmentDto) {
    return this.prisma.stationApartment.create({
      data: data,
    });
  }

  async deleteStationApartment(id: number) {
    return this.prisma.stationApartment.delete({
      where: {
        id,
      },
    });
  }

  async updateStationApartment(id: number, data: UpdateStationApartmentDto) {
    return this.prisma.stationApartment.update({
      where: {
        id,
      },
      data: data,
    });
  }
}
