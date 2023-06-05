import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { StationPierElectricityTypeService } from './station-pier-electricity-type.service';
import { StationPierElectricityTypeResponseTransformInterceptor } from './interceptors/station-pier-electricity-type.interceptor';
import { QueryStationPierElectricityTypeIncludeDto } from './dto/query-station-pier-electricity-type-include.dto';
import { QueryStationPierElectricityTypeFilterDto } from './dto/query-station-pier-electricity-type-filter.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { QueryParamsValidatorInterceptor } from '../../../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';

@ApiTags('station-pier-electricity-type')
@UseInterceptors(StationPierElectricityTypeResponseTransformInterceptor)
@Controller('station-pier-electricity-type')
export class StationPierElectricityTypeController {
  constructor(
    private stationPierElectricityTypeService: StationPierElectricityTypeService,
  ) {}

  @ApiOperation({ summary: 'Get all station pier electricity types' })
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

  

}
