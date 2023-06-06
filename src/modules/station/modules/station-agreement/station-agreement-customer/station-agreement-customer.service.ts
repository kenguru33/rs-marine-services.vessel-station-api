import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../database/prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateStationAgreementCustomerDto } from './dto/update-station-agreement-customer.dto';
import { QueryStationAgreementCustomerFilterDto } from './dto/query-station-agreement-customer-filter.dto';
import { QueryStationAgreementCustomerIncludeDto } from './dto/query-station-agreement-customer-include.dto';

@Injectable()
export class StationAgreementCustomerService {
  constructor(private prisma: PrismaService) {}

  async getStationAgreementCustomers(
    queryInclude: QueryStationAgreementCustomerIncludeDto,
    queryFilter: QueryStationAgreementCustomerFilterDto,
  ) {
    const stationAgreementCustomerIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementCustomerInclude>(
        queryInclude.include,
      );

    return this.prisma.stationAgreementCustomer.findMany({
      include: stationAgreementCustomerIncludes,
      where: queryFilter,
    });
  }

  async getStationAgreementCustomer(
    id: number,
    queryInclude: QueryStationAgreementCustomerIncludeDto,
  ) {
    const stationAgreementCustomerIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementCustomerInclude>(
        queryInclude.include,
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
    query: QueryStationAgreementCustomerIncludeDto,
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
    queryInclude: QueryStationAgreementCustomerIncludeDto,
  ) {
    const stationAgreementCustomerIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementCustomerInclude>(
        queryInclude.include,
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
