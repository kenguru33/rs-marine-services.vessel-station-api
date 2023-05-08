import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { StationAgreementCustomerService } from './station-agreement-customer.service';
import { CreateStationAgreementCustomerDto } from './dto/create-station-agreement-customer.dto';
import { UpdateStationAgreementCustomerDto } from './dto/update-station-agreement-customer.dto';

@Controller('station-agreement-customer')
export class StationAgreementCustomerController {
  constructor(
    private stationAgreementCustomerService: StationAgreementCustomerService,
  ) {}

  @Get()
  async getStationAgreementCustomers() {
    return this.stationAgreementCustomerService.getAllStationAgreementCustomers();
  }

  @Get(':id')
  async getStationAgreementCustomer(@Param('id', ParseIntPipe) id: number) {
    return this.stationAgreementCustomerService.getStationAgreementCustomer(id);
  }

  @Post()
  async create(@Body() data: CreateStationAgreementCustomerDto) {
    return this.stationAgreementCustomerService.create(data);
  }

  @Delete(':id')
  async deleteStationAgreementCustomer(@Param('id', ParseIntPipe)id: number) {
    return this.stationAgreementCustomerService.deleteStationAgreementCustomer(
      id,
    );
  }

  @Put(':id')
  async updateStationAgreementCustomer(
    @Param('id', ParseIntPipe)id: number,
    @Body() data: UpdateStationAgreementCustomerDto,
  ) {
    return this.stationAgreementCustomerService.updateStationAgreementCustomer(
      id,
      data,
    );
  }
}
