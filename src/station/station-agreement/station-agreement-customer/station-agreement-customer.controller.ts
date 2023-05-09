import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { StationAgreementCustomerService } from './station-agreement-customer.service';
import { CreateStationAgreementCustomerDto } from './dto/create-station-agreement-customer.dto';
import { UpdateStationAgreementCustomerDto } from './dto/update-station-agreement-customer.dto';
import { StationAgreementCustomerResponseTransformInterceptor } from './interceptors/station-agreement-customer.interceptor';
import { QueryParamsValidatorInterceptor } from '../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_INCLUDES, ALLOWED_FILTERS } from './constants';
import { QueryStationAgreementCustomerDto } from './dto/query-station-agreement-customer.dto';

@UseInterceptors(StationAgreementCustomerResponseTransformInterceptor)
@Controller('station-agreement-customer')
export class StationAgreementCustomerController {
  constructor(
    private stationAgreementCustomerService: StationAgreementCustomerService,
  ) {}

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getStationAgreementCustomers(
    @Query() query: QueryStationAgreementCustomerDto,
  ) {
    return this.stationAgreementCustomerService.getStationAgreementCustomers(
      query,
    );
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getStationAgreementCustomer(
    @Query() query: QueryStationAgreementCustomerDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.stationAgreementCustomerService.getStationAgreementCustomer(
      id,
      query,
    );
  }

  @Post()
  async create(
    @Body() data: CreateStationAgreementCustomerDto,
    @Query() query: QueryStationAgreementCustomerDto,
  ) {
    return this.stationAgreementCustomerService.create(data, query);
  }

  @Delete(':id')
  async deleteStationAgreementCustomer(@Param('id', ParseIntPipe) id: number) {
    return this.stationAgreementCustomerService.deleteStationAgreementCustomer(
      id,
    );
  }

  @Put(':id')
  async updateStationAgreementCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateStationAgreementCustomerDto,
    @Query() query: QueryStationAgreementCustomerDto,
  ) {
    return this.stationAgreementCustomerService.updateStationAgreementCustomer(
      id,
      data,
      query,
    );
  }
}
