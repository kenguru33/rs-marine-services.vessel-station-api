
import { StationApartmentService } from "./station-apartment.service";
import { CreateStationApartmentDto } from "./dto/create-station-apartment.dto";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";

@Controller('station-apartment')
export class StationApartmentController {
  constructor(private stationApartmentService: StationApartmentService) {}

  @Get()
  async getStationApartments() {
    return this.stationApartmentService.getStationApartments();
  }

  @Get(':id')
  async getStationApartment(@Param('id', ParseIntPipe) id: number) {
    return this.stationApartmentService.getStationApartment(id);
  }

  @Post()
  async createStationApartment(@Body() dto: CreateStationApartmentDto) {
    return this.stationApartmentService.createStationApartment(dto);
  }

  @Put(':id')
  async updateStationApartment(@Body() dto: CreateStationApartmentDto, @Param('id', ParseIntPipe) id: number) {
    return this.stationApartmentService.updateStationApartment(id, dto);
  }

  @Delete(':id')
  async deleteStationApartment(@Param('id', ParseIntPipe) id: number) {
    return this.stationApartmentService.deleteStationApartment(id);
  }
}