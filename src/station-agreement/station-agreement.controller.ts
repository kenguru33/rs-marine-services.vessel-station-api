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
import { StationAgreementService } from './station-agreement.service';
import { CreateStationAgreementDto } from './dto/create-station-agreement.dto';
import { UpdateStationAgreementDto } from './dto/update-station-agreement.dto';

@Controller('station-agreement')
export class StationAgreementController {
  constructor(private stationAgreementService: StationAgreementService) {}

  @Get()
  async getStationAgreements() {
    return this.stationAgreementService.getStationAgreements();
  }

  @Get(':id')
  async getStationAgreement(@Param('id', ParseIntPipe) id: number) {
    return this.stationAgreementService.getStationAgreement(id);
  }

  @Post()
  async createStationAgreement(@Body() data: CreateStationAgreementDto) {
    return this.stationAgreementService.createStationAgreement(data);
  }

  @Delete(':id')
  async deleteStationAgreement(@Param('id', ParseIntPipe) id: number) {
    return this.stationAgreementService.deleteStationAgreement(id);
  }

  @Put(':id')
  async updateStationAgreement(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateStationAgreementDto,
  ) {
    return this.stationAgreementService.updateStationAgreement(id, data);
  }
}
