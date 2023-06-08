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
import { VesselStateService } from './vessel-state.service';
import { CreateVesselStateDto } from './dto/createVesselState.dto';
import { UpdateVesselStateDto } from './dto/updateVesselState.dto';
import { VesselStateResponseTransformInterceptor } from './interceptors/vessel-capability-response-transform.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { QueryVesselStateIncludeDto } from './dto/query-vessel-state-include.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryVesselStateFilterDto } from './dto/query-vessel-state-filter.dto';
import { ResponseVesselStateDto } from './dto/response-vessel-state.dto';

@ApiTags('vessel-state')
@UseInterceptors(VesselStateResponseTransformInterceptor)
@Controller('vessel-state')
export class VesselStateController {
  constructor(private vesselStateService: VesselStateService) {}

  @ApiOperation({ summary: 'Get vessel state by id' })
  @ApiResponse({ type: ResponseVesselStateDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getState(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryVesselStateIncludeDto,
  ) {
    return this.vesselStateService.getState(id, queryInclude);
  }

  @ApiOperation({ summary: 'Get all vessel states' })
  @ApiResponse({ type: ResponseVesselStateDto, isArray: true })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getStates(
    @Query() queryInclude: QueryVesselStateIncludeDto,
    @Query() queryFilter: QueryVesselStateFilterDto,
  ) {
    return this.vesselStateService.getStates(queryInclude, queryFilter);
  }

  @ApiOperation({ summary: 'Create vessel state' })
  @ApiResponse({ type: ResponseVesselStateDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createSubState(
    @Body() data: CreateVesselStateDto,
    @Query() queryInclude: QueryVesselStateIncludeDto,
  ) {
    return this.vesselStateService.createSubState(data, queryInclude);
  }

  @ApiOperation({ summary: 'Update vessel state' })
  @ApiResponse({ type: ResponseVesselStateDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateSubState(
    @Body() data: UpdateVesselStateDto,
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryVesselStateIncludeDto,
  ) {
    return this.vesselStateService.updateSubState(id, data, queryInclude);
  }

  @ApiOperation({ summary: 'Delete vessel state' })
  @ApiResponse({ type: ResponseVesselStateDto })
  @Delete(':id')
  async deleteSubState(@Param('id', ParseIntPipe) id: number) {
    return this.vesselStateService.deleteSubState(id);
  }
}
