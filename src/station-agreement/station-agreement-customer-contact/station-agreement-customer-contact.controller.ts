import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { StationAgreementCustomerContactService } from './station-agreement-customer-contact.service';
import { CreateStationAgreementCustomerContactDto } from './dto/create-station-agreement-customer-contact.dto';
import { UpdateStationAgreementCustomerContactDto } from './dto/update-station-agreement-customer-contact.dto';

@Controller('station-agreement-customer-contact')
export class StationAgreementCustomerContactController {
  constructor(
    private stationAgreementCustomerContactService: StationAgreementCustomerContactService,
  ) {}

  @Get()
  async getStationAgreementCustomerContacts() {
    return this.stationAgreementCustomerContactService.getAllStationAgreementCustomerContacts();
  }

  @Get(':id')
  async getStationAgreementCustomerContact(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.stationAgreementCustomerContactService.getStationAgreementCustomerContact(
      id,
    );
  }

  @Post()
  async create(@Body() data: CreateStationAgreementCustomerContactDto) {
    return this.stationAgreementCustomerContactService.create(data);
  }

  @Delete(':id')
  async deleteStationAgreementCustomerContact(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.stationAgreementCustomerContactService.deleteStationAgreementCustomerContact(
      id,
    );
  }

  @Put(':id')
  async updateStationAgreementCustomerContact(
    @Param('id', ParseIntPipe)id: number,
    @Body() data: UpdateStationAgreementCustomerContactDto,
  ) {
    return this.stationAgreementCustomerContactService.updateStationAgreementCustomerContact(
      id,
      data,
    );
  }
}
