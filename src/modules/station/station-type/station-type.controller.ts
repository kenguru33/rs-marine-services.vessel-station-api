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
import { StationTypeService } from './station-type.service';
import { CreateStationTypeDto } from './dto/create-station-type.dto';
import { UpdateStationTypeDto } from './dto/update-station-type.dto';

@Controller('station-type')
export class StationTypeController {
  constructor(private stationTypeService: StationTypeService) {}

  @Get()
  async getStationTypes() {
    return this.stationTypeService.getStationTypes();
  }

  @Get(':id')
  async getStationType(@Param('id', ParseIntPipe) id: number) {
    return this.stationTypeService.getStationType(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createStationType(@Body() dto: CreateStationTypeDto) {
    return this.stationTypeService.createStationType(dto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateStationType(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStationTypeDto,
  ) {
    return this.stationTypeService.updateStationType(id, dto);
  }

  @Delete(':id')
  async deleteStationType(@Param('id', ParseIntPipe) id: number) {
    return this.stationTypeService.deleteStationType(id);
  }
}
