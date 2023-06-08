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
import { StationAgreementTypeService } from './station-agreement-type.service';
import { CreateStationAgreementTypeDto } from './dto/create-station-agreement-type.dto';
import { StationAgreementTypeResponseTransformInterceptor } from './interceptors/station-agreement-type.interceptor';
import { QueryParamsValidatorInterceptor } from '../../../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryStationAgreementTypeIncludeDto } from './dto/query-station-agreement-type-include.dto';
import { QueryStationAgreementTypeFilterDto } from './dto/query-station-agreement-type-filter.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseStationAgreementTypeDto } from './dto/response-station-agreement-type.dto';

@ApiTags('station-agreement-type')
@UseInterceptors(StationAgreementTypeResponseTransformInterceptor)
@Controller('station-agreement-type')
export class StationAgreementTypeController {
  constructor(
    private stationAgreementTypeService: StationAgreementTypeService,
  ) {}

  @ApiOperation({ summary: 'Get all station agreement types' })
  @ApiResponse({ type: ResponseStationAgreementTypeDto, isArray: true })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getStationAgreementTypes(
    @Query() queryInclude: QueryStationAgreementTypeIncludeDto,
    @Query() queryFilter: QueryStationAgreementTypeFilterDto,
  ) {
    return await this.stationAgreementTypeService.getStationAgreementTypes(
      queryInclude,
      queryFilter,
    );
  }

  @ApiOperation({ summary: 'Get station agreement type by id' })
  @ApiResponse({ type: ResponseStationAgreementTypeDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getStationAgreementType(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryStationAgreementTypeIncludeDto,
  ) {
    return await this.stationAgreementTypeService.getStationAgreementType(
      id,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Create station agreement type' })
  @ApiResponse({ type: ResponseStationAgreementTypeDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createStationAgreementType(
    @Body() dto: CreateStationAgreementTypeDto,
    @Query() queryInclude: QueryStationAgreementTypeIncludeDto,
  ) {
    return await this.stationAgreementTypeService.createStationAgreementType(
      dto,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Update station agreement type' })
  @ApiResponse({ type: ResponseStationAgreementTypeDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateStationAgreementType(
    @Body() dto: CreateStationAgreementTypeDto,
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryStationAgreementTypeIncludeDto,
  ) {
    return await this.stationAgreementTypeService.updateStationAgreementType(
      id,
      dto,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Delete station agreement type' })
  @ApiResponse({ type: ResponseStationAgreementTypeDto })
  @Delete(':id')
  async deleteStationAgreementType(@Param('id', ParseIntPipe) id: number) {
    return await this.stationAgreementTypeService.deleteStationAgreementType(
      id,
    );
  }
}
