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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateStationDto } from './dto/create-station.dto';
import { StationService } from './station.service';
import { Station } from '@prisma/client';
import { StationResponseTransformInterceptor } from './interceptors/station-response-transform.interceptor';
import { QueryParamsValidatorInterceptor } from '../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryStationDto } from './dto/query-station.dto';

@Controller('station')
export class StationController {
  constructor(private stationsService: StationService) {}

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
    StationResponseTransformInterceptor,
  )
  @Get(':id')
  async station(@Param('id', ParseIntPipe) id: number): Promise<Station> {
    return this.stationsService.getStation(id);
  }

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
    StationResponseTransformInterceptor,
  )
  @Get()
  async getStations(@Query() query: QueryStationDto): Promise<Station[]> {
    return this.stationsService.getStations(query);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createStation(@Body() dto: CreateStationDto): Promise<Station> {
    return this.stationsService.createStation(dto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateStation(
    @Body() dto: CreateStationDto,
    @Param('id') id: number,
  ): Promise<Station> {
    return this.stationsService.updateStation(id, dto);
  }

  @Delete(':id')
  async deleteStation(@Param('id', ParseIntPipe) id: number): Promise<Station> {
    return this.stationsService.deleteStation(id);
  }
}
