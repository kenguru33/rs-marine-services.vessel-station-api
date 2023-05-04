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
import { QueryStationDto } from './dto/query-station.dto';
import { StationTransformInterceptor } from './interceptors/station-transform.interceptor';

@Controller('station')
export class StationController {
  constructor(private stationsService: StationService) {}

  @Get(':id')
  async station(@Param('id', ParseIntPipe) id: number): Promise<Station> {
    return this.stationsService.getStation(id);
  }

  @Get()
  @UseInterceptors(StationTransformInterceptor)
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
