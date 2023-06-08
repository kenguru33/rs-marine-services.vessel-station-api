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
import {
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Vessel } from '@prisma/client';
import { QueryParamsValidatorInterceptor } from '../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { CreateVesselDto } from './dto/create-vessel.dto';
import { QueryVesselFilterDto } from './dto/query-vessel-filter.dto';
import { QueryVesselIncludeDto } from './dto/query-vessel-include.dto';
import { ResponseVesselDto } from './dto/response-vessel.dto';
import { UpdateVesselDto } from './dto/update-vessel.dto';
import { VesselResponseTransformInterceptor } from './interceptors/vessel-response-transform.interceptor';
import { VesselService } from './vessel.service';

@ApiTags('vessel')
@UseInterceptors(VesselResponseTransformInterceptor)
@Controller('vessel')
export class VesselController {
  constructor(private vesselService: VesselService) {}

  @ApiOperation({ summary: 'Get all vessels' })
  @ApiResponse({ type: ResponseVesselDto, isArray: true })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  getVessels(
    @Query() include: QueryVesselIncludeDto,
    @Query() filter: QueryVesselFilterDto,
  ) {
    return this.vesselService.getVessels(include, filter);
  }

  @ApiOperation({ summary: 'Get vessel by id' })
  @ApiResponse({ type: ResponseVesselDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  getVessel(
    @Param('id', ParseIntPipe) id: number,
    @Query() include: QueryVesselIncludeDto,
  ) {
    return this.vesselService.getVessel(id, include);
  }

  @ApiOperation({ summary: 'Create vessel' })
  @ApiResponse({ type: ResponseVesselDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  createVessel(
    @Body() data: CreateVesselDto,
    @Query() query: QueryVesselIncludeDto,
  ): Promise<Vessel> {
    return this.vesselService.create(data, query);
  }

  @ApiOperation({ summary: 'Update vessel' })
  @ApiProperty({
    description:
      'state,class,capabilities,state.stateCategory,station,type,communicationEquipments.type,inspectors,maintenances,maintenances.approvedBy',
  })
  @ApiResponse({ type: ResponseVesselDto })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  updateVessel(
    @Body() data: UpdateVesselDto,
    @Param('id') id: number,
    @Query() queryVesselInclude: QueryVesselIncludeDto,
  ): Promise<Vessel> {
    return this.vesselService.update(id, data, queryVesselInclude);
  }

  @ApiOperation({ summary: 'Delete vessel' })
  @ApiResponse({ type: ResponseVesselDto })
  @Delete(':id')
  deleteVessel(@Param('id', ParseIntPipe) id: number): Promise<Vessel> {
    return this.vesselService.delete(id);
  }
}
