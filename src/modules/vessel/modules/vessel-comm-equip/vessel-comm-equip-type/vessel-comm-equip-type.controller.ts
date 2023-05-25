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
import { VesselCommEquipTypeService } from './vessel-comm-equip-type.service';
import { UpdateVesselCommEquipTypeDto } from './dto/update-vessel-comm-equip-type';
import { CreateVesselCommEquipTypeDto } from './dto/create-vessel-comm-equip-type';
import { ApiTags } from '@nestjs/swagger';
import { VesselCommEquipTypeTransformInterceptor } from './interceptors/vessel-comm-equip-type-transform.interceptor';
import { QueryParamsValidatorInterceptor } from '../../../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';

@ApiTags('vessel-communication-equipment-type')
@UseInterceptors(VesselCommEquipTypeTransformInterceptor)
@Controller('vessel-communication-equipment-type')
export class VesselCommEquipTypeController {
  constructor(private vesselCommEquipTypeService: VesselCommEquipTypeService) {}

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
  async createVesselCommEquipType(@Body() data: CreateVesselCommEquipTypeDto) {
    console.log(data);
    return this.vesselCommEquipTypeService.createVesselCommEquipType(data);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateVesselCommEquipType(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselCommEquipTypeDto,
  ) {
    return this.vesselCommEquipTypeService.updateVesselCommEquipType(id, data);
  }

  @Delete(':id')
  async deleteVesselCommEquipType(@Param('id', ParseIntPipe) id: number) {
    return this.vesselCommEquipTypeService.deleteVesselCommEquipType(id);
  }
}
