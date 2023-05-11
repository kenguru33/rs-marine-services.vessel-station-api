import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { VesselCommunicationEquipmentService } from './vessel-communication-equipment.service';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { VesselCommunicationEquipmentTransformInterceptor } from './interceptors/vessel-communication-equipment.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { CreateVesselCommunicationEquipmentDto } from './dto/create-vessel-communication-equipment.dto';
import { UpdateVesselCommunicationEquipmentDto } from './dto/update-vessel-communication-equipment.dto';
import { QueryVesselCommunicationEquipmentDto } from './dto/query-vessel-communication-equipment.dto';

@UseInterceptors(VesselCommunicationEquipmentTransformInterceptor)
@Controller('vessel-communication-equipment-type')
export class VesselCommunicationEquipmentController {
  constructor(
    private vesselBuildInfoService: VesselCommunicationEquipmentService,
  ) {}

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getVesselCommunicationEquipments(
    @Query() query: QueryVesselCommunicationEquipmentDto,
  ) {
    return this.vesselBuildInfoService.getVesselCommunicationEquipments(query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getVesselCommunicationEquipment(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: QueryVesselCommunicationEquipmentDto,
  ) {
    return this.vesselBuildInfoService.getVesselCommunicationEquipment(
      id,
      query,
    );
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createVesselCommunicationEquipment(
    @Body() dto: CreateVesselCommunicationEquipmentDto,
    @Query() query: QueryVesselCommunicationEquipmentDto,
  ) {
    return this.vesselBuildInfoService.createVesselCommunicationEquipment(
      dto,
      query,
    );
  }

  @Put(':id')
  async updateVesselCommunicationEquipment(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateVesselCommunicationEquipmentDto,
    @Query() query: QueryVesselCommunicationEquipmentDto,
  ) {
    return this.vesselBuildInfoService.updateVesselCommunicationEquipment(
      id,
      dto,
      query,
    );
  }

  @Delete(':id')
  async deleteVesselCommunicationEquipment(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.vesselBuildInfoService.deleteVesselCommunicationEquipment(id);
  }
}
