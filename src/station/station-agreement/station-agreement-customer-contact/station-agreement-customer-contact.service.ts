import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { CreateStationAgreementCustomerContactDto } from './dto/create-station-agreement-customer-contact.dto';
import { UpdateStationAgreementCustomerContactDto } from './dto/update-station-agreement-customer-contact.dto';

@Injectable()
export class StationAgreementCustomerContactService {
  constructor(private prisma: PrismaService) {}

  async getAllStationAgreementCustomerContacts() {
    return this.prisma.stationAgreementCustomerContact.findMany();
  }

  async getStationAgreementCustomerContact(id: number) {
    return this.prisma.stationAgreementCustomerContact.findUniqueOrThrow({
      where: { id },
    });
  }

  async create(data: CreateStationAgreementCustomerContactDto) {
    return this.prisma.stationAgreementCustomerContact.create({
      data,
    });
  }

  async deleteStationAgreementCustomerContact(id: number) {
    return this.prisma.stationAgreementCustomerContact.delete({
      where: {
        id,
      },
    });
  }

  async updateStationAgreementCustomerContact(
    id: number,
    data: UpdateStationAgreementCustomerContactDto,
  ) {
    return this.prisma.stationAgreementCustomerContact.update({
      where: {
        id,
      },
      data,
    });
  }
}
