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
import { StationAgreementService } from './station-agreement.service';
import { CreateStationAgreementDto } from './dto/create-station-agreement.dto';
import { UpdateStationAgreementDto } from './dto/update-station-agreement.dto';
import { ResponseStationAgreementDto } from './dto/response-station-agreement.dto';
import { StationAgreementResponseTransformInterceptor } from './interceptors/station-agreement-customer.interceptor';
import { QueryParamsValidatorInterceptor } from '../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryStationAgreementDto } from './dto/query-station-agreement.dto';

@UseInterceptors(StationAgreementResponseTransformInterceptor)
@UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS))
@Controller('station-agreement')
export class StationAgreementController {
  constructor(private stationAgreementService: StationAgreementService) {}

  
  @Get()
  async getStationAgreements(@Query() query: QueryStationAgreementDto) {
    return this.stationAgreementService.getStationAgreements(query);
  }

  @Get(':id')
  async getStationAgreement(@Param('id', ParseIntPipe) id: number) {
    return this.stationAgreementService.getStationAgreement(id);
  }

  @Post()
  async createStationAgreement(@Body() data: CreateStationAgreementDto) {
    return this.stationAgreementService.createStationAgreement(data);
  }

  @Delete(':id')
  async deleteStationAgreement(@Param('id', ParseIntPipe) id: number) {
    return this.stationAgreementService.deleteStationAgreement(id);
  }

  @Put(':id')
  async updateStationAgreement(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateStationAgreementDto,
  ) {
    return this.stationAgreementService.updateStationAgreement(id, data);
  }
}
