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
import { StationAgreementCustomerContactService } from './station-agreement-customer-contact.service';
import { CreateStationAgreementCustomerContactDto } from './dto/create-station-agreement-customer-contact.dto';
import { UpdateStationAgreementCustomerContactDto } from './dto/update-station-agreement-customer-contact.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StationAgreementCustomerResponseTransformInterceptor } from '../station-agreement-customer/interceptors/station-agreement-customer.interceptor';
import { QueryParamsValidatorInterceptor } from '../../../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryStationAgreementCustomerContactFilterDto } from './dto/query-station-agreement-customer-contact-filter.dto';
import { QueryStationAgreementCustomerContactIncludeDto } from './dto/query-station-agreement-customer-contact-include.dto';
import { query } from 'express';
import { ResponseStationAgreementCustomerContactDto } from './dto/response-station-agreement-customer-response.dto';

@ApiTags('station-agreement-customer-contact')
@UseInterceptors(StationAgreementCustomerResponseTransformInterceptor)
@Controller('station-agreement-customer-contact')
export class StationAgreementCustomerContactController {
  constructor(
    private stationAgreementCustomerContactService: StationAgreementCustomerContactService,
  ) {}

  @ApiOperation({ summary: 'Get all station agreement customer contacts' })
  @ApiResponse({
    type: ResponseStationAgreementCustomerContactDto,
    isArray: true,
  })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getStationAgreementCustomerContacts(
    @Query() queryInclude: QueryStationAgreementCustomerContactIncludeDto,
    @Query() queryFilter: QueryStationAgreementCustomerContactFilterDto,
  ) {
    return this.stationAgreementCustomerContactService.getAllStationAgreementCustomerContacts(
      queryInclude,
      queryFilter,
    );
  }

  @ApiOperation({ summary: 'Get a station agreement customer contact by id' })
  @ApiResponse({ type: ResponseStationAgreementCustomerContactDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getStationAgreementCustomerContact(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryStationAgreementCustomerContactIncludeDto,
  ) {
    return this.stationAgreementCustomerContactService.getStationAgreementCustomerContact(
      id,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Create a station agreement customer contact' })
  @ApiResponse({ type: ResponseStationAgreementCustomerContactDto })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Post()
  async create(
    @Body() data: CreateStationAgreementCustomerContactDto,
    @Query() queryInclude: QueryStationAgreementCustomerContactIncludeDto,
  ) {
    return this.stationAgreementCustomerContactService.create(
      data,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Update a station agreement customer contact' })
  @ApiResponse({ type: ResponseStationAgreementCustomerContactDto })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Put(':id')
  async updateStationAgreementCustomerContact(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateStationAgreementCustomerContactDto,
    @Query() queryInclude: QueryStationAgreementCustomerContactIncludeDto,
  ) {
    return this.stationAgreementCustomerContactService.updateStationAgreementCustomerContact(
      id,
      data,
      queryInclude,
    );
  }

  @Delete(':id')
  async deleteStationAgreementCustomerContact(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.stationAgreementCustomerContactService.deleteStationAgreementCustomerContact(
      id,
    );
  }
}
