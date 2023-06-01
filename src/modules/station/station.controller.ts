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
import { CreateStationDto } from './dto/create-station.dto';
import { StationService } from './station.service';
import { Station } from '@prisma/client';
import { StationResponseTransformInterceptor } from './interceptors/station-response-transform.interceptor';
import { QueryParamsValidatorInterceptor } from '../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryStationFilterDto } from './dto/query-station-filter.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { QueryStationIncludeDto } from './dto/query-station-include.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@ApiTags('station')
@UseInterceptors(StationResponseTransformInterceptor)
@Controller('station')
export class StationController {
  constructor(private stationsService: StationService) {}

  @ApiOperation({ summary: 'Get station by id' })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES),
    StationResponseTransformInterceptor,
  )
  @Get(':id')
  async getStation(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryStationIncludeDto,
  ) {
    return this.stationsService.getStation(id, queryInclude);
  }

  @ApiOperation({ summary: 'Get all stations' })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
    StationResponseTransformInterceptor,
  )
  @Get()
  async getStations(
    @Query() queryInclude: QueryStationIncludeDto,
    @Query() queryFilter: QueryStationFilterDto,
  ): Promise<Station[]> {
    return this.stationsService.getStations(queryInclude, queryFilter);
  }

  @ApiOperation({ summary: 'Create station' })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES),
    StationResponseTransformInterceptor,
  )
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createStation(
    @Body() dto: CreateStationDto,
    @Query() queryInclude: QueryStationIncludeDto,
  ) {
    return this.stationsService.createStation(dto, queryInclude);
  }

  @ApiOperation({ summary: 'Update station' })
  @Put(':id')
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES),
    StationResponseTransformInterceptor,
  )
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateStation(
    @Body() dto: UpdateStationDto,
    @Param('id') id: number,
    @Query() queryInclude: QueryStationIncludeDto,
  ): Promise<Station> {
    return this.stationsService.updateStation(id, dto, queryInclude);
  }

  @ApiOperation({ summary: 'Delete station' })
  @Delete(':id')
  async deleteStation(@Param('id', ParseIntPipe) id: number): Promise<Station> {
    return this.stationsService.deleteStation(id);
  }
}
