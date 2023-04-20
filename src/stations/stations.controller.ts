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
import { StationWithRelation, StationsService } from './stations.service';

@Controller('stations')
export class StationsController {
  constructor(private stationsService: StationsService) {}

  @Get(':id')
  async station(@Param('id', ParseIntPipe) id: number): Promise<StationWithRelation> {
    return this.stationsService.station(id);
  }

  @Get()
  async stations() : Promise<StationWithRelation[]> {
    return this.stationsService.stations();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createStation(@Body() data: CreateStationDto) {
    return this.stationsService.createStation(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateStation(@Body() data: CreateStationDto, @Param('id') id: number) {
    return this.stationsService.updateStation(id, data);
  }

  @Delete(':id')
  async deleteStation(@Param('id', ParseIntPipe) id: number) {
    return this.stationsService.deleteStation(id);
  }
}
