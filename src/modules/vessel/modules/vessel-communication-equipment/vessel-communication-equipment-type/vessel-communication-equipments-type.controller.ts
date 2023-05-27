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
import { VesselCommunicationEquipmentTypeService } from './vessel-communication-equipment-type.service';
import { UpdateVesselCommunicationEquipmentTypeDto } from './dto/update-vessel-communication-equipment-type';
import { CreateVesselCommunicationEquipmentTypeDto } from './dto/create-vessel-communication-equipment-type';
import { ApiTags } from '@nestjs/swagger';
import { VesselCommunicationEquipmentTypeTransformInterceptor } from './interceptors/vessel-communication-equipment-type-transform.interceptor';
import { QueryParamsValidatorInterceptor } from '../../../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryVesselCommunicationEquipmentTypeIncludeDto } from './dto/query-vessel-communication-equipment-type-include.dto';
import { QueryVesselCommunicationEquipmentTypeFilterDto } from './dto/query-vessel-communication-equipment-type-filter.dto';

@ApiTags('vessel-communication-equipment-type')
@UseInterceptors(VesselCommunicationEquipmentTypeTransformInterceptor)
@Controller('vessel-communication-equipment-type')
export class VesselCommunicationEquipmentTypeController {
  constructor(
    private vesselCommEquipTypeService: VesselCommunicationEquipmentTypeService,
  ) {}

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getVesselCommunicationEquipmentTypes(
    @Query() queryInclude: QueryVesselCommunicationEquipmentTypeIncludeDto,
    @Query() queryFilter: QueryVesselCommunicationEquipmentTypeFilterDto,
  ) {
    return this.vesselCommEquipTypeService.getVesselCommunicationEquipmentTypes(
      queryInclude,
      queryFilter,
    );
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getVesselCommunicationEquipmentType(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryVesselCommunicationEquipmentTypeIncludeDto,
  ) {
    return this.vesselCommEquipTypeService.getVesselCommunicationEquipmentType(
      id,
      queryInclude,
    );
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createVesselCommunicationEquipmentType(
    @Body() data: CreateVesselCommunicationEquipmentTypeDto,
    @Query() queryInclude: QueryVesselCommunicationEquipmentTypeIncludeDto,
  ) {
    console.log(data);
    return this.vesselCommEquipTypeService.createVesselCommunicationEquipmentType(
      data,
      queryInclude,
    );
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateVesselCommunicationEquipmentType(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselCommunicationEquipmentTypeDto,
    @Query() queryInclude: QueryVesselCommunicationEquipmentTypeIncludeDto,
  ) {
    return this.vesselCommEquipTypeService.updateVesselCommunicationEquipmentType(
      id,
      data,
      queryInclude,
    );
  }

  @Delete(':id')
  async deleteVesselCommunicationEquipmentType(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.vesselCommEquipTypeService.deleteVesselCommunicationEquipmentType(
      id,
    );
  }
}
