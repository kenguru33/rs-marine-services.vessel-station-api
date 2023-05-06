import { StationAccommodationService } from './station-accommodation.service';
import { CreateStationAccommodationDto } from './dto/create-station-apartment.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateStationAccommodationDto } from './dto/update-station-apartment.dto';

@Controller('station-accommodation')
export class StationAccommodationController {
  constructor(private stationAccommodation: StationAccommodationService) {}

  @Get()
  async getStationAccommodations() {
    return this.stationAccommodation.getStationAccommodations();
  }

  @Get(':id')
  async getStationAccommodation(@Param('id', ParseIntPipe) id: number) {
    return this.stationAccommodation.getStationAccommodation(id);
  }

  @Post()
  async createStationAccommodation(@Body() dto: CreateStationAccommodationDto) {
    return this.stationAccommodation.createStationAccommodation(dto);
  }

  @Put(':id')
  async updateStationAccommodation(
    @Body() dto: UpdateStationAccommodationDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.stationAccommodation.updateStationAccommodation(id, dto);
  }

  @Delete(':id')
  async deleteStationAccommodation(@Param('id', ParseIntPipe) id: number) {
    return this.stationAccommodation.deleteStationAccommodation(id);
  }
}
