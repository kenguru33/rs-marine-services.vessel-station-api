import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateStationAgreementCustomerDto } from './dto/update-station-agreement-customer.dto';

@Injectable()
export class StationAgreementCustomerService {
  constructor(private prisma: PrismaService) {}

  async getAllStationAgreementCustomers() {
    return this.prisma.stationAgreementCustomer.findMany({
      include: {
        stationAgreements: true,
        contacts: true,
      },
    });
  }

  async getStationAgreementCustomer(id: number) {
    return this.prisma.stationAgreementCustomer.findUniqueOrThrow({
      where: { id },
    });
  }

  async create(data: Prisma.StationAgreementCustomerCreateInput) {
    return this.prisma.stationAgreementCustomer.create({
      data,
    });
  }

  async deleteStationAgreementCustomer(id: number) {
    return this.prisma.stationAgreementCustomer.delete({
      where: {
        id,
      },
    });
  }

  async updateStationAgreementCustomer(
    id: number,
    data: UpdateStationAgreementCustomerDto,
  ) {
    return this.prisma.stationAgreementCustomer.update({
      where: {
        id,
      },
      data,
    });
  }
}
