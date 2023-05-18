import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { VesselCommEquipTypeService } from './vessel-comm-equip-type.service';
import { UpdateVesselCommEquipTypeDto } from './dto/update-vessel-comm-equip-type';
import { CreateVesselCommEquipTypeDto } from './dto/create-vessel-comm-equip-type';

@Controller('vessel-communication-equipment-type')
export class VesselCommEquipTypeController {
  constructor(private vesselCommEquipTypeService: VesselCommEquipTypeService) {}

  @Get()
  async getVesselCommunicationEquipmentTypes() {
    return this.vesselCommEquipTypeService.getVesselCommEquipTypes();
  }

  @Get(':id')
  async getVesselCommEquipType(@Param('id', ParseIntPipe) id: number) {
    return this.vesselCommEquipTypeService.getVesselCommEquipType(id);
  }

  @Post()
  async createVesselCommEquipType(@Body() data: CreateVesselCommEquipTypeDto) {
    console.log(data);
    return this.vesselCommEquipTypeService.createVesselCommEquipType(data);
  }

  @Put(':id')
  async updateVesselCommEquipType(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselCommEquipTypeDto,
  ) {
    return this.vesselCommEquipTypeService.updateVesselCommEquipType(id, data);
  }
}
