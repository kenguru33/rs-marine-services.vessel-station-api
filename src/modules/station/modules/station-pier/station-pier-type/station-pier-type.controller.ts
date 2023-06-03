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
import { StationPierTypeService } from './station-pier-type.service';
import { CreateStationPierTypeDto } from './dto/create-station-pier-type.dto';
import { UpdateStationPierTypeDto } from './dto/update-station-pier-type.dto';
import { StationPierTypeResponseTransformInterceptor } from './interceptors/station-pier-type-response-transform.interceptor';
import { QueryParamsValidatorInterceptor } from '../../../../../shared/interceptors/query-params-validator.interceptor';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryStationPierTypeIncludeDto } from './dto/query-station-pier-type-include.dto';
import { QueryStationPierTypeFilterDto } from './dto/query-station-pier-type-filter.dto';
import { ResponseStationPierTypeDto } from './dto/response-pier-type.dto';

@ApiTags('station-pier-type')
@UseInterceptors(StationPierTypeResponseTransformInterceptor)
@Controller('station-pier-type')
export class StationPierTypeController {
  constructor(private statinPierType: StationPierTypeService) {}

  @ApiOperation({ summary: 'Get all station pier types' })
  @ApiResponse({ type: ResponseStationPierTypeDto, isArray: true })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getStationPierTypes(
    @Query() queryInclude: QueryStationPierTypeIncludeDto,
    @Query() queryFilter: QueryStationPierTypeFilterDto,
  ) {
    return this.statinPierType.getStationPierTypes(queryInclude, queryFilter);
  }

  @ApiOperation({ summary: 'Get station pier type by id' })
  @ApiResponse({ type: ResponseStationPierTypeDto })
  @Get(':id')
  async getStationPierType(@Param('id', ParseIntPipe) id: number) {
    return this.statinPierType.getStationPierType(id);
  }

  @ApiOperation({ summary: 'Create station pier type' })
  @ApiResponse({ type: ResponseStationPierTypeDto })
  @Post()
  async createStationPierType(@Body() dto: CreateStationPierTypeDto) {
    return this.statinPierType.createStationPierType(dto);
  }

  @ApiOperation({ summary: 'Update station pier type' })
  @ApiResponse({ type: ResponseStationPierTypeDto })
  @Put(':id')
  async updateStationPierType(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStationPierTypeDto,
  ) {
    return this.statinPierType.updateStationPierType(id, dto);
  }

  @ApiOperation({ summary: 'Delete station pier type' })
  @ApiResponse({ type: ResponseStationPierTypeDto })
  @Delete(':id')
  async deleteStationPierType(@Param('id', ParseIntPipe) id: number) {
    return this.statinPierType.deleteStationPierType(id);
  }
}
