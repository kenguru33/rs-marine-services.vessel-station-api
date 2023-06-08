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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryParamsValidatorInterceptor } from '../../../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { CreateStationAccommodationTypeDto } from './dto/create-station-accommodation-type.dto';
import { QueryStationAccommodationTypeIncludeDto } from './dto/query-station-accommodation-type-include.dto';
import { ResponseAccommodationTypeDto } from './dto/response-accommodation-type.dto';
import { UpdateeStationAccommodationTypeDto } from './dto/update-station-accommodation-type.dto';
import { StationAccommodationTypeResponseTransformInterceptor } from './interceptors/station-accommodation-response-transform.interceptor';
import { StationAccommodationTypeService } from './station-accommodation-type.service';
import { QueryStationAccommodationTypeFilterDto } from './dto/query-station-accommodation-type-filter.dto';

@ApiTags('station-accommodation-type')
@UseInterceptors(StationAccommodationTypeResponseTransformInterceptor)
@Controller('station-accommodation-type')
export class StationAccommodationTypeController {
  constructor(
    private stationAccommodationTypeService: StationAccommodationTypeService,
  ) {}

  @ApiOperation({ summary: 'Get all station accommodation types' })
  @ApiResponse({ type: ResponseAccommodationTypeDto, isArray: true })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getStationAccommodationTypes(
    @Query() queryInclude: QueryStationAccommodationTypeIncludeDto,
    @Query() queryFilter: QueryStationAccommodationTypeFilterDto,
  ) {
    return this.stationAccommodationTypeService.getStationAccommodationTypes(
      queryInclude,
      queryFilter,
    );
  }

  @ApiOperation({ summary: 'Get station accommodation type by id' })
  @ApiResponse({ type: ResponseAccommodationTypeDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getStationAccommodationType(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryStationAccommodationTypeIncludeDto,
  ) {
    return this.stationAccommodationTypeService.getStationAccommodationType(
      id,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Create station accommodation type' })
  @ApiResponse({ type: ResponseAccommodationTypeDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createStationAccommodationType(
    @Body() dto: CreateStationAccommodationTypeDto,
    @Query() queryInclude: QueryStationAccommodationTypeIncludeDto,
  ) {
    return this.stationAccommodationTypeService.createStationAccommodationType(
      dto,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Update station accommodation type' })
  @ApiResponse({ type: ResponseAccommodationTypeDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateStationAccommodationType(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateeStationAccommodationTypeDto,
    @Query() queryInclude: QueryStationAccommodationTypeIncludeDto,
  ) {
    return this.stationAccommodationTypeService.updateStationAccommodationType(
      id,
      dto,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Delete station accommodation type' })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Delete(':id')
  async deleteStationAccommodationType(@Param('id', ParseIntPipe) id: number) {
    return this.stationAccommodationTypeService.deleteStationAccommodationType(
      id,
    );
  }
}
