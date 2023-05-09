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
import { StationPierService } from './station-pier.service';
import { CreateStationPierDto } from './dto/create-station-pier.dto';
import { UpdateStationPierDto } from './dto/update-station-pier.dto';

@Controller('station-pier')
export class StationPierController {
  constructor(private stationPierService: StationPierService) {}

  @Get()
  async getStationPiers() {
    return this.stationPierService.getStationPiers();
  }

  @Get(':id')
  async getStationPier(@Param('id', ParseIntPipe) id: number) {
    return this.stationPierService.getStationPier(id);
  }

  @Post()
  async createStationPier(@Body()dto: CreateStationPierDto) {
    return this.stationPierService.createStationPier(dto);
  }

  @Put(':id')
  async updateStationPier(
    @Param('id', ParseIntPipe) id: number,
    @Body()dto: UpdateStationPierDto,
  ) {
    return this.stationPierService.updateStationPier(id, dto);
  }

  @Delete(':id')
  async deleteStationPier(@Param('id', ParseIntPipe) id: number) {
    return this.stationPierService.deleteStationPier(id);
  }
}
