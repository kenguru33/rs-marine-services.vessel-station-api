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
import { VesselInspectorService } from './vessel-inspector.service';
import { CreateVesselInspectorDto } from './dto/create-vessel-inspector.dto';
import { UpdateVesselInspectorDto } from './dto/update-vessel-inspector.dto';
import { VesselInspectorTransformInterceptor } from './interceptor/vessel-inspector-transform.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { QueryVesselInspectorFilterDto } from './dto/query-vessel-inspector-filter.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryVesselInspectorIncludeDto } from './dto/query-vessel-inspector-include.dto';
import { ResponseVesselInspectorDto } from './dto/response-vessel-inspector.dto';

@ApiTags('vessel-inspector')
@UseInterceptors(VesselInspectorTransformInterceptor)
@Controller('vessel-inspector')
export class VesselInspectorController {
  constructor(private vessselInspectorService: VesselInspectorService) {}

  @ApiOperation({ summary: 'Get vessel inspector by id' })
  @ApiResponse({ type: ResponseVesselInspectorDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getVesselInspector(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryVesselInspectorIncludeDto,
  ) {
    return await this.vessselInspectorService.getVesselInspector(id, queryInclude);
  }

  @ApiOperation({ summary: 'Get all vessel inspectors' })
  @ApiResponse({ type: ResponseVesselInspectorDto, isArray: true })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getVesselInspectors(@Query() queryInclude: QueryVesselInspectorIncludeDto ,@Query() queryFilter: QueryVesselInspectorFilterDto) {
    return await this.vessselInspectorService.getVesselInspectors(queryInclude, queryFilter);
  }

  @ApiOperation({ summary: 'Create vessel inspector' })
  @ApiResponse({ type: ResponseVesselInspectorDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createVesselInspector(
    @Body() data: CreateVesselInspectorDto,
    @Query() queryInclude: QueryVesselInspectorIncludeDto,
  ) {
    return await this.vessselInspectorService.createVesselInspector(
      data,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Update vessel inspector' })
  @ApiResponse({ type: ResponseVesselInspectorDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateVesselInspector(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselInspectorDto,
    @Query() queryInclude: QueryVesselInspectorIncludeDto,
  ) {
    return await this.vessselInspectorService.updateVesselInspector(
      id,
      data,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Delete vessel inspector' })
  @ApiResponse({ type: ResponseVesselInspectorDto })
  @Delete(':id')
  async deleteVesselInspector(@Param('id', ParseIntPipe) id: number) {
    return await this.vessselInspectorService.deleteVesselInspector(id);
  }
}
