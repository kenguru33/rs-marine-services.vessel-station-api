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
import { StationAgreementTypeService } from './station-agreement-type.service';
import { CreateStationAgreementTypeDto } from './dto/create-station-agreement-type.dto';

@Controller('station-agreement-type')
export class StationAgreementTypeController {
  constructor(
    private stationAgreementTypeService: StationAgreementTypeService,
  ) {}

  @Get()
  async getStationAgreementTypes() {
    return await this.stationAgreementTypeService.getStationAgreementTypes();
  }

  @Get(':id')
  async getStationAgreementType(@Param('id', ParseIntPipe) id: number) {
    return await this.stationAgreementTypeService.getStationAgreementType(id);
  }

  @Post()
  async createStationAgreementType(@Body() dto: CreateStationAgreementTypeDto) {
    return await this.stationAgreementTypeService.createStationAgreementType(
      dto,
    );
  }

  @Put(':id')
  async updateStationAgreementType(
    @Body() dto: CreateStationAgreementTypeDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.stationAgreementTypeService.updateStationAgreementType(
      id,
      dto,
    );
  }

  @Delete(':id')
  async deleteStationAgreementType(@Param('id', ParseIntPipe) id: number) {
    return await this.stationAgreementTypeService.deleteStationAgreementType(
      id,
    );
  }

}
