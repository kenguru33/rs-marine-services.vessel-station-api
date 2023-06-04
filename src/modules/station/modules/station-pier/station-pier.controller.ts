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
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { CreateStationPierDto } from './dto/create-station-pier.dto';
import { QueryStationPierFilterDto } from './dto/query-station-pier-filter.dto';
import { QueryStationPierIncludeDto } from './dto/query-station-pier-include.dto';
import { UpdateStationPierDto } from './dto/update-station-pier.dto';
import { StationPierResponseTransformInterceptor } from './interceptors/station-pier.interceptor';
import { StationPierService } from './station-pier.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseStationPierDto } from './dto/response-station-pier.dto';

@ApiTags('station-pier')
@UseInterceptors(new StationPierResponseTransformInterceptor())
@Controller('station-pier')
export class StationPierController {
  constructor(private stationPierService: StationPierService) {}

  @ApiOperation({summary: 'Get all station piers'})
  @ApiResponse({type: ResponseStationPierDto, isArray: true})
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getStationPiers(
    @Query() queryInclude: QueryStationPierIncludeDto,
    @Query() queryFilter: QueryStationPierFilterDto,
  ) {
    return this.stationPierService.getStationPiers(queryInclude, queryFilter);
  }

  @ApiOperation({summary: 'Get station pier by id'})
  @ApiResponse({type: ResponseStationPierDto})
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getStationPier(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: QueryStationPierIncludeDto,
  ) {
    return this.stationPierService.getStationPier(id, query);
  }

  @ApiOperation({summary: 'Create station pier'})
  @ApiResponse({type: ResponseStationPierDto})
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createStationPier(
    @Body() dto: CreateStationPierDto,
    @Query() query: QueryStationPierIncludeDto,
  ) {
    return this.stationPierService.createStationPier(dto, query);
  }

  @ApiOperation({summary: 'Update station pier'})
  @ApiResponse({type: ResponseStationPierDto})
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateStationPier(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStationPierDto,
    @Query() query: QueryStationPierIncludeDto,
  ) {
    return this.stationPierService.updateStationPier(id, dto, query);
  }

  @ApiOperation({summary: 'Delete station pier'})
  @ApiResponse({type: ResponseStationPierDto})
  @Delete(':id')
  async deleteStationPier(@Param('id', ParseIntPipe) id: number) {
    return this.stationPierService.deleteStationPier(id);
  }
}
