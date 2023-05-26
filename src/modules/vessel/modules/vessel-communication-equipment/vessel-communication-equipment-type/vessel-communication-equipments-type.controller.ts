import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { VesselCommunicationEquipmentTypeService } from './vessel-communication-equipment-type.service';
import { UpdateVesselCommunicationEquipmentTypeDto } from './dto/update-vessel-communication-equipment-type';
import { CreateVesselCommunicationEquipmentTypeDto } from './dto/create-vessel-communication-equipment-type';
import { ApiTags } from '@nestjs/swagger';
import { VesselCommEquipTypeTransformInterceptor } from './interceptors/vessel-comm-equip-type-transform.interceptor';
import { QueryParamsValidatorInterceptor } from '../../../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';

@ApiTags('vessel-communication-equipment-type')
@UseInterceptors(VesselCommEquipTypeTransformInterceptor)
@Controller('vessel-communication-equipment-type')
export class VesselCommunicationEquipmentTypeController {
  constructor(
    private vesselCommEquipTypeService: VesselCommunicationEquipmentTypeService,
  ) {}

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getVesselCommunicationEquipmentTypes() {
    return this.vesselCommEquipTypeService.getVesselCommEquipTypes();
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getVesselCommEquipType(@Param('id', ParseIntPipe) id: number) {
    return this.vesselCommEquipTypeService.getVesselCommEquipType(id);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createVesselCommEquipType(
    @Body() data: CreateVesselCommunicationEquipmentTypeDto,
  ) {
    console.log(data);
    return this.vesselCommEquipTypeService.createVesselCommEquipType(data);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateVesselCommEquipType(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselCommunicationEquipmentTypeDto,
  ) {
    return this.vesselCommEquipTypeService.updateVesselCommEquipType(id, data);
  }

  @Delete(':id')
  async deleteVesselCommEquipType(@Param('id', ParseIntPipe) id: number) {
    return this.vesselCommEquipTypeService.deleteVesselCommEquipType(id);
  }
}
