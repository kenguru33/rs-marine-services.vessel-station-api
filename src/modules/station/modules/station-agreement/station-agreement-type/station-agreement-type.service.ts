import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../database/prisma.service';
import { CreateStationAgreementTypeDto } from './dto/create-station-agreement-type.dto';
import { UpdateStationAgreementTypeDto } from './dto/update-station-agreement-type.dto';

@Injectable()
export class StationAgreementTypeService {
  constructor(private prisma: PrismaService) {}

  async getStationAgreementTypes() {
    return await this.prisma.stationAgreementType.findMany({
      include: {
        agreements: true,
      },
    });
  }

  async getStationAgreementType(id: number) {
    return await this.prisma.stationAgreementType.findUnique({
      where: { id },
    });
  }

  async createStationAgreementType(data: CreateStationAgreementTypeDto) {
    return await this.prisma.stationAgreementType.create({
      data,
    });
  }

  async updateStationAgreementType(
    id: number,
    data: UpdateStationAgreementTypeDto,
  ) {
    return await this.prisma.stationAgreementType.update({
      where: { id },
      data,
    });
  }

  async deleteStationAgreementType(id: number) {
    return await this.prisma.stationAgreementType.delete({
      where: { id },
    });
  }
}
