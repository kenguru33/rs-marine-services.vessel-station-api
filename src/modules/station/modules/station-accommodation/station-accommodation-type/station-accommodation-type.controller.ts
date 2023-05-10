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
import { StationAccommodationTypeService } from './station-accommodation-type.service';
import { CreateStationAccommodationTypeDto } from './dto/create-station-accommodation-type.dto';
import { UpdateeStationAccommodationTypeDto } from './dto/update-station-accommodation-type.dto';

@Controller('station-accommodation-type')
export class StationAccommodationTypeController {
  constructor(
    private stationAccommodationTypeService: StationAccommodationTypeService,
  ) {}

  @Get()
  async getStationAccommodationTypes() {
    return this.stationAccommodationTypeService.getStationAccommodationTypes();
  }

  @Get(':id')
  async getStationAccommodationType(@Param('id', ParseIntPipe) id: number) {
    return this.stationAccommodationTypeService.getStationAccommodationType(id);
  }

  @Post()
  async createStationAccommodationType(
    @Body() dto: CreateStationAccommodationTypeDto,
  ) {
    return this.stationAccommodationTypeService.createStationAccommodationType(
      dto,
    );
  }

  @Delete(':id')
  async deleteStationAccommodationType(@Param('id', ParseIntPipe) id: number) {
    return this.stationAccommodationTypeService.deleteStationAccommodationType(
      id,
    );
  }

  @Put(':id')
  async updateStationAccommodationType(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateeStationAccommodationTypeDto,
  ) {
    return this.stationAccommodationTypeService.updateStationAccommodationType(
      id,
      dto,
    );
  }
}
