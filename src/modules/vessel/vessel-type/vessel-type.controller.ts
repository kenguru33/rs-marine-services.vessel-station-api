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
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryParamsValidatorInterceptor } from '../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { CreateVesselTypeDto } from './dto/create-vessel-type.dto';
import { UpdateVesselTypeDto } from './dto/update-vessel-type.dto';
import { VesselTypeTransformInterceptor } from './interceptors/vessel-type-transform.interceptor';
import { VesselTypeService } from './vessel-type.service';
import { QueryVesselTypeFilterDto } from './dto/query-vessel-type-filter.dto';
import { QueryVesselTypeIncludeDto } from './dto/query-vessel-type-include.dto';
import { QueryVesselIncludeDto } from '../dto/query-vessel-include.dto';
import { ResponseVesselTypeDto } from './dto/response-vessel-type.dto';
import { type } from 'os';

@ApiTags('vessel-type')
@UseInterceptors(VesselTypeTransformInterceptor)
@Controller('vessel-type')
export class VesselTypeController {
  constructor(private vesselTypeService: VesselTypeService) {}

  @ApiOperation({ summary: 'Get all vessel types' })
  @ApiResponse({ type: ResponseVesselTypeDto, isArray: true })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getVesselTypes(
    @Query() queryVesselTypeIncludeDto: QueryVesselTypeIncludeDto,
    @Query() queryVesselTypeFilter: QueryVesselTypeFilterDto,
  ) {
    return this.vesselTypeService.getVesselTypes(
      queryVesselTypeIncludeDto,
      queryVesselTypeFilter,
    );
  }

  @ApiOperation({ summary: 'Get all vessel types' })
  @ApiResponse({ type: ResponseVesselTypeDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getVesselType(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryVesselIncludeDto: QueryVesselIncludeDto,
  ) {
    return this.vesselTypeService.getVesselType(id, queryVesselIncludeDto);
  }

  @ApiOperation({ summary: 'Create a vessel type' })
  @ApiResponse({ status: 201, description: 'vessel type created', type: ResponseVesselTypeDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createVesselType(
    @Body() createVesselTypeDto: CreateVesselTypeDto,
    @Query() queryVesselIncludeDto: QueryVesselIncludeDto,
  ) {
    return this.vesselTypeService.createVesselType(
      createVesselTypeDto,
      queryVesselIncludeDto,
    );
  }

  @ApiOperation({ summary: 'Update a vessel type' })
  @ApiResponse({ status: 204, description: 'Vessel type updated', type: ResponseVesselTypeDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateVesselType(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateVesselTypeDto: UpdateVesselTypeDto,
    @Query() queryVesselTypeDto: QueryVesselTypeIncludeDto,
  ) {
    return this.vesselTypeService.updateVesselType(
      id,
      updateVesselTypeDto,
      queryVesselTypeDto,
    );
  }

  @ApiOperation({ summary: 'Delete a vessel type' })
  @ApiResponse({ type: ResponseVesselTypeDto })
  @ApiResponse({
    status: 204,
    description: 'Vessel type deleted',
    type: ResponseVesselTypeDto,
  })
  @Delete(':id')
  async deleteVesselType(@Param('id', ParseIntPipe) id: number) {
    return this.vesselTypeService.deleteVesselType(id);
  }
}
