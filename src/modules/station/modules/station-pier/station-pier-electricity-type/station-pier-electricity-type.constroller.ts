import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { StationPierElectricityTypeService } from './station-pier-electricity-type.service';
import { StationPierElectricityTypeResponseTransformInterceptor } from './interceptors/station-pier-electricity-type.interceptor';
import { QueryStationPierElectricityTypeIncludeDto } from './dto/query-station-pier-electricity-type-include.dto';
import { QueryStationPierElectricityTypeFilterDto } from './dto/query-station-pier-electricity-type-filter.dto';

@UseInterceptors(StationPierElectricityTypeResponseTransformInterceptor)
@Controller('station-pier-electricity-type')
export class StationPierElectricityTypeController {
  constructor(
    private stationPierElectricityTypeService: StationPierElectricityTypeService,
  ) {}

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
}
