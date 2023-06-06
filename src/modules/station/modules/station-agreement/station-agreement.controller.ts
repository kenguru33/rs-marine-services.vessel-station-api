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
import { StationAgreementService } from './station-agreement.service';
import { CreateStationAgreementDto } from './dto/create-station-agreement.dto';
import { UpdateStationAgreementDto } from './dto/update-station-agreement.dto';
import { ResponseStationAgreementDto } from './dto/response-station-agreement.dto';
import { StationAgreementResponseTransformInterceptor } from './interceptors/station-agreement-customer.interceptor';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryStationAgreementIncludeDto } from './dto/query-station-agreement-include.dto';
import { QueryStationAgreementFilterDto } from './dto/query-station-agreement-filter.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('station-agreement')
@UseInterceptors(StationAgreementResponseTransformInterceptor)
@Controller('station-agreement')
export class StationAgreementController {
  constructor(private stationAgreementService: StationAgreementService) {}

  @ApiOperation({ summary: 'Get all station agreements' })
  @ApiResponse({ type: ResponseStationAgreementDto, isArray: true })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getStationAgreements(
    @Query() queryInclude: QueryStationAgreementIncludeDto,
    queryFilter: QueryStationAgreementFilterDto,
  ) {
    return this.stationAgreementService.getStationAgreements(
      queryInclude,
      queryFilter,
    );
  }

  @ApiOperation({ summary: 'Get station agreement by id' })
  @ApiResponse({ type: ResponseStationAgreementDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getStationAgreement(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryStationAgreementIncludeDto,
  ) {
    return this.stationAgreementService.getStationAgreement(id, queryInclude);
  }

  @ApiOperation({ summary: 'Create station agreement' })
  @ApiResponse({ type: ResponseStationAgreementDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createStationAgreement(
    @Body() data: CreateStationAgreementDto,
    @Query() queryInclude: QueryStationAgreementIncludeDto,
  ) {
    return this.stationAgreementService.createStationAgreement(
      data,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Update station agreement by id' })
  @ApiResponse({ type: ResponseStationAgreementDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateStationAgreement(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateStationAgreementDto,
    @Query() queryInclude: QueryStationAgreementIncludeDto,
  ) {
    return this.stationAgreementService.updateStationAgreement(
      id,
      data,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Delete station agreement by id' })
  @ApiResponse({ type: ResponseStationAgreementDto })
  @Delete(':id')
  async deleteStationAgreement(@Param('id', ParseIntPipe) id: number) {
    return this.stationAgreementService.deleteStationAgreement(id);
  }
}
