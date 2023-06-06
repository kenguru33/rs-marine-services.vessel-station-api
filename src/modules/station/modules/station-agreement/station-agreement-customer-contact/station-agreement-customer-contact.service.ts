import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../database/prisma.service';
import { CreateStationAgreementCustomerContactDto } from './dto/create-station-agreement-customer-contact.dto';
import { UpdateStationAgreementCustomerContactDto } from './dto/update-station-agreement-customer-contact.dto';
import { QueryStationAgreementCustomerContactIncludeDto } from './dto/query-station-agreement-customer-contact-include.dto';
import { QueryStationAgreementCustomerContactFilterDto } from './dto/query-station-agreement-customer-contact-filter.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class StationAgreementCustomerContactService {
  constructor(private prisma: PrismaService) {}

  async getAllStationAgreementCustomerContacts(
    queryInclude: QueryStationAgreementCustomerContactIncludeDto,
    queryFilter: QueryStationAgreementCustomerContactFilterDto,
  ) {
    const stationAgreementCustomerContactIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementCustomerContactInclude>(
        queryInclude.include,
      );
    return this.prisma.stationAgreementCustomerContact.findMany({
      include: stationAgreementCustomerContactIncludes,
      where: queryFilter,
    });
  }

  async getStationAgreementCustomerContact(
    id: number,
    queryInclude: QueryStationAgreementCustomerContactIncludeDto,
  ) {
    const stationAgreementCustomerContactIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementCustomerContactInclude>(
        queryInclude.include,
      );
    return this.prisma.stationAgreementCustomerContact.findUniqueOrThrow({
      where: { id },
      include: stationAgreementCustomerContactIncludes,
    });
  }

  async create(
    data: CreateStationAgreementCustomerContactDto,
    queryInclude: QueryStationAgreementCustomerContactIncludeDto,
  ) {
    const stationAgreementCustomerContactIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementCustomerContactInclude>(
        queryInclude.include,
      );
    return this.prisma.stationAgreementCustomerContact.create({
      data: {
        customer: {
          connect: {
            id: data.customerId ? data.customerId : undefined,
          },
        },
        email: data.email,
        onCall: data.onCall,
        phone: data.phone,
      },
    });
  }

  async updateStationAgreementCustomerContact(
    id: number,
    data: UpdateStationAgreementCustomerContactDto,
    queryInclude: QueryStationAgreementCustomerContactIncludeDto,
  ) {
    const stationAgreementCustomerContactIncludes =
      await this.prisma.parseInclude<Prisma.StationAgreementCustomerContactInclude>(
        queryInclude.include,
      );
    return this.prisma.stationAgreementCustomerContact.update({
      where: {
        id,
      },
      data,
      include: stationAgreementCustomerContactIncludes,
    });
  }
  
  async deleteStationAgreementCustomerContact(id: number) {
    return this.prisma.stationAgreementCustomerContact.delete({
      where: {
        id,
      },
    });
  }
}
