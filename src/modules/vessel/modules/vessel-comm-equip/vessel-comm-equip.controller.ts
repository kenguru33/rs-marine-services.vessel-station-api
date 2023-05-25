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
import { VesselCommEquipService } from './vessel-comm-equip.service';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { VesselCommEquipTransformInterceptor } from './interceptors/vessel-comm-equip.interceptor-transform';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { CreateVesselCommEquipDto } from './dto/create-vessel-comm-equip.dto';
import { UpdateVesselCommEquipDto } from './dto/update-vessel-comm-equip.dto';
import { QueryVesselCommEquipIncludeDto } from './dto/query-vessel-comm-equip-include.dto';
import { ApiTags } from '@nestjs/swagger';
import { QueryVesselCommEquipFilterDto } from './dto/query-vessel-comm-equip-filter.dto';

@ApiTags('vessel-comm-equip')
@UseInterceptors(VesselCommEquipTransformInterceptor)
@Controller('vessel-comm-equip')
export class VesselCommEquipController {
  constructor(private vesselBuildInfoService: VesselCommEquipService) {}

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getVesselCommunicationEquipments(
    @Query() queryInclude: QueryVesselCommEquipIncludeDto,
    @Query() queryFilter: QueryVesselCommEquipFilterDto,
  ) {
    return this.vesselBuildInfoService.getVesselCommunicationEquipments(
      queryInclude,
      queryFilter,
    );
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getVesselCommunicationEquipment(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: QueryVesselCommEquipIncludeDto,
  ) {
    return this.vesselBuildInfoService.getVesselCommunicationEquipment(
      id,
      query,
    );
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createVesselCommunicationEquipment(
    @Body() dto: CreateVesselCommEquipDto,
    @Query() query: QueryVesselCommEquipIncludeDto,
  ) {
    return this.vesselBuildInfoService.createVesselCommunicationEquipment(
      dto,
      query,
    );
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateVesselCommunicationEquipment(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateVesselCommEquipDto,
    @Query() query: QueryVesselCommEquipIncludeDto,
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
