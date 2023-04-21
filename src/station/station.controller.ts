import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateStationDto } from './dto/createStation.dto';
import { StationService } from './station.service';
import { Station } from '@prisma/client';

@Controller('station')
export class StationController {
  constructor(private stationsService: StationService) {}

  @Get(':id')
  async station(@Param('id', ParseIntPipe) id: number): Promise<Station> {
    return this.stationsService.getStation(id);
  }

  @Get()
  async stations(): Promise<Station[]> {
    return this.stationsService.getStations();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createStation(@Body() dto: CreateStationDto): Promise<Station> {
    return this.stationsService.createStation(dto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateStation(@Body() dto: CreateStationDto, @Param('id') id: number): Promise<Station> {
    return this.stationsService.updateStation(id, dto);
  }

  @Delete(':id')
  async deleteStation(@Param('id', ParseIntPipe) id: number): Promise<Station> {
    return this.stationsService.deleteStation(id);
  }
}
