import { StationAccommodationService } from './station-accommodation.service';
import { CreateStationAccommodationDto } from './dto/create-station-accommodation.dto';
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
import { UpdateStationAccommodationDto } from './dto/update-station-apartment.dto';
import { StationAccommodatoionResponseTransformInterceptor } from './interceptors/station-accommodation-response-transform.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { QueryStationAccommodationDto } from './dto/query-station-accommodation.dto';

@UseInterceptors(StationAccommodatoionResponseTransformInterceptor)
@Controller('station-accommodation')
export class StationAccommodationController {
  constructor(private stationAccommodation: StationAccommodationService) {}

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getStationAccommodations(@Query() query: QueryStationAccommodationDto) {
    return this.stationAccommodation.getStationAccommodations(query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getStationAccommodation(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: QueryStationAccommodationDto,
  ) {
    return this.stationAccommodation.getStationAccommodation(id, query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createStationAccommodation(
    @Body() dto: CreateStationAccommodationDto,
    @Query() query: QueryStationAccommodationDto,
  ) {
    return this.stationAccommodation.createStationAccommodation(dto, query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateStationAccommodation(
    @Body() dto: UpdateStationAccommodationDto,
    @Param('id', ParseIntPipe) id: number,
    @Query() query: QueryStationAccommodationDto,
  ) {
    return this.stationAccommodation.updateStationAccommodation(id, dto, query);
  }

  @Delete(':id')
  async deleteStationAccommodation(@Param('id', ParseIntPipe) id: number) {
    return this.stationAccommodation.deleteStationAccommodation(id);
  }
}
