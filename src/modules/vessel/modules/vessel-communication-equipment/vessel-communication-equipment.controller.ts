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
import { VesselCommEquipService } from './vessel-communication-equipment.service';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { VesselCommunicationEquipmentTransformInterceptor } from './interceptors/vessel-communication-equipment.interceptor-transform';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { CreateVesselCommunicationEquipmentDto } from './dto/create-vessel-communication-equipment.dto';
import { UpdateVesselCommunicationEquipmentDto } from './dto/update-vessel-comm-equip.dto';
import { QueryVesselCommunicationEquipmentIncludeDto } from './dto/query-vessel-communication-equipment-include.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryVesselCommunicationEquipmentFilterDto } from './dto/query-vessel-communication-equipment-filter.dto';
import { ResponseVesselCommunicationEquipmentDto } from './dto/response-vessel-communication-equipment.dts';

@ApiTags('vessel-communication-equipment')
@UseInterceptors(VesselCommunicationEquipmentTransformInterceptor)
@Controller('vessel-communication-equipment')
export class VesselCommunicationEquipmentController {
  constructor(private vesselBuildInfoService: VesselCommEquipService) {}

  @ApiOperation({ summary: 'Get all vessel communication equipment' })
  @ApiResponse({ type: ResponseVesselCommunicationEquipmentDto, isArray: true })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getVesselCommunicationEquipments(
    @Query() queryInclude: QueryVesselCommunicationEquipmentIncludeDto,
    @Query() queryFilter: QueryVesselCommunicationEquipmentFilterDto,
  ) {
    return this.vesselBuildInfoService.getVesselCommunicationEquipments(
      queryInclude,
      queryFilter,
    );
  }

  @ApiOperation({ summary: 'Get vessel communication equipment by id' })
  @ApiResponse({ type: ResponseVesselCommunicationEquipmentDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getVesselCommunicationEquipment(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: QueryVesselCommunicationEquipmentIncludeDto,
  ) {
    return this.vesselBuildInfoService.getVesselCommunicationEquipment(
      id,
      query,
    );
  }

  @ApiOperation({ summary: 'Create vessel communication equipment' })
  @ApiResponse({ type: ResponseVesselCommunicationEquipmentDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createVesselCommunicationEquipment(
    @Body() dto: CreateVesselCommunicationEquipmentDto,
    @Query() query: QueryVesselCommunicationEquipmentIncludeDto,
  ) {
    return this.vesselBuildInfoService.createVesselCommunicationEquipment(
      dto,
      query,
    );
  }

  @ApiOperation({ summary: 'Update vessel communication equipment' })
  @ApiResponse({ type: ResponseVesselCommunicationEquipmentDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateVesselCommunicationEquipment(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateVesselCommunicationEquipmentDto,
    @Query() query: QueryVesselCommunicationEquipmentIncludeDto,
  ) {
    return this.vesselBuildInfoService.updateVesselCommunicationEquipment(
      id,
      dto,
      query,
    );
  }

  @ApiOperation({ summary: 'Delete vessel communication equipment' })
  @ApiResponse({ type: ResponseVesselCommunicationEquipmentDto })
  @Delete(':id')
  async deleteVesselCommunicationEquipment(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.vesselBuildInfoService.deleteVesselCommunicationEquipment(id);
  }
}
