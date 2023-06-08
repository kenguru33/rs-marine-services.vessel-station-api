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
import { StationPierElectricityTypeService } from './station-pier-electricity-type.service';
import { StationPierElectricityTypeResponseTransformInterceptor } from './interceptors/station-pier-electricity-type.interceptor';
import { QueryStationPierElectricityTypeIncludeDto } from './dto/query-station-pier-electricity-type-include.dto';
import { QueryStationPierElectricityTypeFilterDto } from './dto/query-station-pier-electricity-type-filter.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryParamsValidatorInterceptor } from '../../../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { CreateStationPierElectricityTypeDto } from './dto/create-station-pier-electricity-type.dto';
import { ResponseStationPierElectricityTypeDto } from './dto/response-station-pier-electricity-type.dto';

@ApiTags('station-pier-electricity-type')
@UseInterceptors(StationPierElectricityTypeResponseTransformInterceptor)
@Controller('station-pier-electricity-type')
export class StationPierElectricityTypeController {
  constructor(
    private stationPierElectricityTypeService: StationPierElectricityTypeService,
  ) {}

  @ApiOperation({ summary: 'Get all station pier electricity types' })
  @ApiResponse({ type: ResponseStationPierElectricityTypeDto, isArray: true })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getStationPierElectricityTypes(
    @Query() queryInclude: QueryStationPierElectricityTypeIncludeDto,
    @Query() queryFilter: QueryStationPierElectricityTypeFilterDto,
  ) {
    return this.stationPierElectricityTypeService.getStationPierElectricityTypes(
      queryInclude,
      queryFilter,
    );
  }

  @ApiOperation({ summary: 'Get station pier electricity type by id' })
  @ApiResponse({ type: ResponseStationPierElectricityTypeDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getStationPierElectricityType(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryStationPierElectricityTypeIncludeDto,
  ) {
    return this.stationPierElectricityTypeService.getStationPierElectricityType(
      id,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Create station pier electricity type' })
  @ApiResponse({ type: ResponseStationPierElectricityTypeDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createStationPierElectricityType(
    @Body() data: CreateStationPierElectricityTypeDto,
    @Query() queryInclude: QueryStationPierElectricityTypeIncludeDto,
  ) {
    return this.stationPierElectricityTypeService.createStationPierElectricityType(
      data,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Update station pier electricity type' })
  @ApiResponse({ type: ResponseStationPierElectricityTypeDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateStationPierElectricityType(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CreateStationPierElectricityTypeDto,
    @Query() queryInclude: QueryStationPierElectricityTypeIncludeDto,
  ) {
    return this.stationPierElectricityTypeService.updateStationPierElectricityType(
      id,
      data,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Delete station pier electricity type' })
  @ApiResponse({ type: ResponseStationPierElectricityTypeDto })
  @Delete(':id')
  async deleteStationPierElectricityType(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.stationPierElectricityTypeService.deleteStationPierElectricityType(
      id,
    );
  }
}
