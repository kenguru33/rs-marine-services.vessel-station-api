import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { VesselTypeService } from "./vessel-type.service";
import { CreateVesselTypeDto } from "./dto/create-vessel-type.dto";
import { UpdateVesselTypeDto } from "./dto/update-vessel-type.dto";

@Controller('vessel-type')
export class VesselTypeController {
  constructor(private vesselTypeService: VesselTypeService) {}

  @Get()
  async getVesselTypes() {
    return this.vesselTypeService.getVesselTypes();
  }

  @Get(':id')
  async getVesselType(@Param('id', ParseIntPipe) id: number) {
    return this.vesselTypeService.getVesselType(id);
  }

  @Post()
  async createVesselType(@Body()dto: CreateVesselTypeDto) {
    return this.vesselTypeService.createVesselType(dto);
  }

  @Put(':id')
  async updateVesselType(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateVesselTypeDto) {
    return this.vesselTypeService.updateVesselType(id, dto);
  }

  @Delete(':id')
  async deleteVesselType(@Param('id', ParseIntPipe) id: number) {
    return this.vesselTypeService.deleteVesselType(id);
  }


  

}
