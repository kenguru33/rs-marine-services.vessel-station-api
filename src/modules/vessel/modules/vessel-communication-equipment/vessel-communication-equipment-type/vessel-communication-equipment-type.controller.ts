import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { VesselCommunicationEquipmentTypeService } from './vessel-communication-equipment-type.service';
import { UpdateVesselCommunicationEquipmentTypeDto } from './dto/update-vessel-communication-equipment-type';
import { CreateVesselCommunicationEquipmentTypeDto } from './dto/create-vessel-communication-equipment-type';

@Controller('vessel-communication-equipment-type')
export class VesselCommunicationEquipmentTypeController {
  constructor(
    private vesselCommunicationEquipmentTypeService: VesselCommunicationEquipmentTypeService,
  ) {}

  @Get()
  async getVesselCommunicationEquipmentTypes() {
    return this.vesselCommunicationEquipmentTypeService.getVesselCommunicationEquipmentTypes();
  }

  @Get(':id')
  async getVesselCommunicationEquipmentType(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.vesselCommunicationEquipmentTypeService.getVesselCommunicationEquipmentType(
      id,
    );
  }

  @Post()
  async createVesselCommunicationEquipmentType(
    @Body() data: CreateVesselCommunicationEquipmentTypeDto,
  ) {
    console.log(data);
    return this.vesselCommunicationEquipmentTypeService.createVesselCommunicationEquipmentType(
      data,
    );
  }

  @Put(':id')
  async updateVesselCommunicationEquipmentType(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselCommunicationEquipmentTypeDto,
  ) {
    return this.vesselCommunicationEquipmentTypeService.updateVesselCommunicationEquipmentType(
      id,
      data,
    );
  }
}
