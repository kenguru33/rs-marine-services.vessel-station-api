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
import { QueryParamsValidatorInterceptor } from '../../../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_INCLUDES, ALLOWED_FILTERS } from './constants';
import { QueryStationAgreementCustomerIncludeDto } from './dto/query-station-agreement-customer-include.dto';
import { QueryStationAgreementCustomerFilterDto } from './dto/query-station-agreement-customer-filter.dto';

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
    @Query() queryInclude: QueryStationAgreementCustomerIncludeDto,
    @Query() queryFilter: QueryStationAgreementCustomerFilterDto,
  ) {
    return this.stationAgreementCustomerService.getStationAgreementCustomers(
      queryInclude,
      queryFilter,
    );
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getStationAgreementCustomer(
    @Query() queryInclude: QueryStationAgreementCustomerIncludeDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.stationAgreementCustomerService.getStationAgreementCustomer(
      id,
      queryInclude,
    );
  }

  @Post()
  async create(
    @Body() data: CreateStationAgreementCustomerDto,
    @Query() query: QueryStationAgreementCustomerIncludeDto,
  ) {
    return this.stationAgreementCustomerService.create(data, query);
  }

  @Put(':id')
  async updateStationAgreementCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateStationAgreementCustomerDto,
    @Query() queryInclude: QueryStationAgreementCustomerIncludeDto,
  ) {
    return this.stationAgreementCustomerService.updateStationAgreementCustomer(
      id,
      data,
      queryInclude,
    );
  }

  @Delete(':id')
  async deleteStationAgreementCustomer(@Param('id', ParseIntPipe) id: number) {
    return this.stationAgreementCustomerService.deleteStationAgreementCustomer(
      id,
    );
  }
}
