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
import { VesselCrewService } from './vessel-crew.service';
import { CreateVesselCrewDto } from './dto/create-vessel-crew.dto';
import { UpdateVesselCrewDto } from './dto/update-vessel-crew.dto';

@Controller('vessel-crew')
export class VesselCrewController {
  constructor(private vesselCrewService: VesselCrewService) {}

  @Get()
  async getVesselCrews() {
    return await this.vesselCrewService.getVesselCrews();
  }

  @Get(':id')
  async getVesselCrew(@Param('id', ParseIntPipe) id: number) {
    return await this.vesselCrewService.getVesselCrew(id);
  }

  @Post()
  async createVesselCrew(@Body() data: CreateVesselCrewDto) {
    return await this.vesselCrewService.createVesselCrew(data);
  }

  @Put(':id')
  async updateVesselCrew(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselCrewDto,
  ) {
    return await this.vesselCrewService.updateVesselCrew(id, data);
  }

  @Delete(':id')
  async deleteVesselCrew(@Param('id', ParseIntPipe) id: number) {
    return await this.vesselCrewService.deleteVesselCrew(id);
  }
}
