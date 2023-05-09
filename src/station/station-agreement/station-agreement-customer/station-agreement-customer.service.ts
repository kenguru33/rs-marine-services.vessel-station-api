import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateStationAgreementCustomerDto } from './dto/update-station-agreement-customer.dto';
import { QueryStationAgreementCustomerDto } from './dto/query-station-agreement-customer.dto';

@Injectable()
export class StationAgreementCustomerService {
  constructor(private prisma: PrismaService) {}

  async getStationAgreementCustomers(query: QueryStationAgreementCustomerDto) {
    const { include, ...where } = query;
    const stationAgreementCustomerIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementCustomerInclude>(
        include,
      );

    return this.prisma.stationAgreementCustomer.findMany({
      include: stationAgreementCustomerIncludes,
      where,
    });
  }

  async getStationAgreementCustomer(
    id: number,
    query: QueryStationAgreementCustomerDto,
  ) {
    const { include, ...where } = query;
    const stationAgreementCustomerIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementCustomerInclude>(
        query.include,
      );
    return this.prisma.stationAgreementCustomer.findUniqueOrThrow({
      where: {
        id,
      },
      include: stationAgreementCustomerIncludes,
    });
  }

  async create(
    data: Prisma.StationAgreementCustomerCreateInput,
    query: QueryStationAgreementCustomerDto,
  ) {
    const stationAgreementCustomerIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementCustomerInclude>(
        query.include,
      );
    return this.prisma.stationAgreementCustomer.create({
      data,
      include: stationAgreementCustomerIncludes,
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
    query: QueryStationAgreementCustomerDto,
  ) {
    const stationAgreementCustomerIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementCustomerInclude>(
        query.include,
      );
    return this.prisma.stationAgreementCustomer.update({
      where: {
        id,
      },
      data,
      include: stationAgreementCustomerIncludes,
    });
  }
}
