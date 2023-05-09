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
import { StationPierTypeService } from './station-pier-type.service';
import { CreateStationPierTypeDto } from './dto/create-station-pier-typer.dto';
import { UpdateStationPierTypeDto } from './dto/update-station-pier-type.dto';

@Controller('station-pier-type')
export class StationPierTypeController {
  constructor(private statinPierType: StationPierTypeService) {}

  @Get()
  async getStationPierTypes() {
    return this.statinPierType.getStationPierTypes();
  }

  @Get(':id')
  async getStationPierType(@Param('id', ParseIntPipe) id: number) {
    return this.statinPierType.getStationPierType(id);
  }

  @Post()
  async createStationPierType(@Body() dto: CreateStationPierTypeDto) {
    return this.statinPierType.createStationPierType(dto);
  }

  @Put(':id')
  async updateStationPierType(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStationPierTypeDto,
  ) {
    return this.statinPierType.updateStationPierType(id, dto);
  }

  @Delete(':id')
  async deleteStationPierType(@Param('id', ParseIntPipe) id: number) {
    return this.statinPierType.deleteStationPierType(id);
  }
}
