import { StationAccommodationService } from './station-accommodation.service';
import { CreateStationAccommodationDto } from './dto/create-station-accommodation.dto';
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
import { UpdateStationAccommodationDto } from './dto/update-station-apartment.dto';
import { StationAccommodationResponseTransformInterceptor } from './interceptors/station-accommodation-response-transform.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { QueryStationAccommodationIncludeDto } from './dto/query-station-accommodation-include.dto';
import { QueryStationAccommodationFilterDto } from './dto/query-station-accommodation-filter.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseAccommodationDto } from './dto/response-station-accommodation.dto';

@ApiTags('station-accommodation')
@UseInterceptors(StationAccommodationResponseTransformInterceptor)
@Controller('station-accommodation')
export class StationAccommodationController {
  constructor(private stationAccommodation: StationAccommodationService) {}

  @ApiOperation({ summary: 'Get all station accommodations' })
  @ApiResponse({ type: ResponseAccommodationDto, isArray: true })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getStationAccommodations(
    @Query() queryInclude: QueryStationAccommodationIncludeDto,
    @Query() queryFilter: QueryStationAccommodationFilterDto,
  ) {
    return this.stationAccommodation.getStationAccommodations(
      queryInclude,
      queryFilter,
    );
  }

  @ApiOperation({ summary: 'Get station accommodation by id' })
  @ApiResponse({ type: ResponseAccommodationDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getStationAccommodation(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryStationAccommodationIncludeDto,
  ) {
    return this.stationAccommodation.getStationAccommodation(id, queryInclude);
  }

  @ApiOperation({ summary: 'Create station accommodation' })
  @ApiResponse({ type: ResponseAccommodationDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createStationAccommodation(
    @Body() dto: CreateStationAccommodationDto,
    @Query() queryInclude: QueryStationAccommodationIncludeDto,
  ) {
    return this.stationAccommodation.createStationAccommodation(
      dto,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Update station accommodation' })
  @ApiResponse({ type: ResponseAccommodationDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateStationAccommodation(
    @Body() dto: UpdateStationAccommodationDto,
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryStationAccommodationIncludeDto,
  ) {
    return this.stationAccommodation.updateStationAccommodation(
      id,
      dto,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Delete station accommodation' })
  @ApiResponse({ type: ResponseAccommodationDto })
  @Delete(':id')
  async deleteStationAccommodation(@Param('id', ParseIntPipe) id: number) {
    return this.stationAccommodation.deleteStationAccommodation(id);
  }
}
