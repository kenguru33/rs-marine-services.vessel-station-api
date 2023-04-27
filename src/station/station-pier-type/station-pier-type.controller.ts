import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { StationPierTypeService } from "./station-pier-type.service";
import { CreateStationPierDto } from "../station-pier/dto/create-station-pier.dto";
import { UpdateStationPierDto } from "../station-pier/dto/update-station-pier.dto";

@Controller('staion-pier-type')
export class StationPierTypeController {
  constructor(private statinPierType: StationPierTypeService) {}

  @Get()
  async getStationPierTypes() {
    return this.statinPierType.getStationPierTypes();
  } 

  @Get(':id')
  async getStationPierType(id: number) {
    return this.statinPierType.getStationPierType(id);
  }

  @Post()
  async createStationPierType(dto: CreateStationPierDto) {
    return this.statinPierType.createStationPierType(dto);
  }

  @Put(':id')
  async updateStationPierType(id: number, dto: UpdateStationPierDto) {
    return this.statinPierType.updateStationPierType(id, dto);
  }

  @Delete(':id')
  async deleteStationPierType(id: number) {
    return this.statinPierType.deleteStationPierType(id);
  }
}