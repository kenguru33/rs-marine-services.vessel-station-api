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
import { StationPierService } from './station-pier.service';
import { CreateStationPierDto } from './dto/create-station-pier.dto';
import { UpdateStationPierDto } from './dto/update-station-pier.dto';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { StationPierResponseTransformInterceptor } from './interceptors/station-pier.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryStationPierDto } from './dto/query-station-pier.dto';

@UseInterceptors(new StationPierResponseTransformInterceptor())
@Controller('station-pier')
export class StationPierController {
  constructor(private stationPierService: StationPierService) {}

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getStationPiers(@Query() query: QueryStationPierDto) {
    return this.stationPierService.getStationPiers(query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getStationPier(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: QueryStationPierDto,
  ) {
    return this.stationPierService.getStationPier(id, query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createStationPier(
    @Body() dto: CreateStationPierDto,
    query: QueryStationPierDto,
  ) {
    return this.stationPierService.createStationPier(dto, query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateStationPier(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStationPierDto,
    @Query() query: QueryStationPierDto,
  ) {
    return this.stationPierService.updateStationPier(id, dto, query);
  }

  @Delete(':id')
  async deleteStationPier(@Param('id', ParseIntPipe) id: number) {
    return this.stationPierService.deleteStationPier(id);
  }
}
