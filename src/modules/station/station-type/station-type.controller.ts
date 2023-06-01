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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StationTypeService } from './station-type.service';
import { CreateStationTypeDto } from './dto/create-station-type.dto';
import { UpdateStationTypeDto } from './dto/update-station-type.dto';
import { QueryParamsValidatorInterceptor } from '../../../shared/interceptors/query-params-validator.interceptor';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { QueryStationTypeIncludeDto } from './dto/query-station-type-incldue.dto';
import { QueryStationTypeFilterDto } from './dto/query-station-type-filter.dto';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { StationTypeResponseTransformInterceptor } from './interceptors/station-type-response-transform.interceptor';

@ApiTags('station-type')
@UseInterceptors(StationTypeResponseTransformInterceptor)
@Controller('station-type')
export class StationTypeController {
  constructor(private stationTypeService: StationTypeService) {}

  @ApiOperation({ summary: 'Get all station types' })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
    StationTypeResponseTransformInterceptor,
  )
  @Get()
  async getStationTypes(
    @Query() queryInclude: QueryStationTypeIncludeDto,
    @Query() queryFilter: QueryStationTypeFilterDto,
  ) {
    return this.stationTypeService.getStationTypes(queryInclude, queryFilter);
  }

  @ApiOperation({ summary: 'Get station type by id' })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES),
    StationTypeResponseTransformInterceptor,
  )
  @Get(':id')
  async getStationType(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryStationTypeIncludeDto,
  ) {
    return this.stationTypeService.getStationType(id, queryInclude);
  }

  @ApiOperation({ summary: 'Create station type' })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES),
    StationTypeResponseTransformInterceptor,
  )
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createStationType(
    @Body() dto: CreateStationTypeDto,
    @Query() QueryInlcude: QueryStationTypeIncludeDto,
  ) {
    return this.stationTypeService.createStationType(dto, QueryInlcude);
  }

  @ApiOperation({ summary: 'Update station type' })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES),
    StationTypeResponseTransformInterceptor,
  )
  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateStationType(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStationTypeDto,
    @Query() queryInclude: QueryStationTypeIncludeDto,
  ) {
    return this.stationTypeService.updateStationType(id, dto, queryInclude);
  }

  @ApiOperation({ summary: 'Delete station type' })
  @Delete(':id')
  async deleteStationType(@Param('id', ParseIntPipe) id: number) {
    return this.stationTypeService.deleteStationType(id);
  }
}
