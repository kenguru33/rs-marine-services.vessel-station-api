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
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
  PickType,
} from '@nestjs/swagger';
import { Vessel } from '@prisma/client';
import { QueryParamsValidatorInterceptor } from '../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { CreateVesselDto } from './dto/createVessel.dto';
import { QueryVesselDto } from './dto/query-vessel.dto';
import { ResponseVesselDto } from './dto/response-vessel.dto';
import { UpdateVesselDto } from './dto/updateVessel.dto';
import { VesselResponseTransformInterceptor } from './interceptors/vessel-response-transform.interceptor';
import { VesselService } from './vessel.service';

@ApiTags('vessel')
@UseInterceptors(VesselResponseTransformInterceptor)
@Controller('vessel')
export class VesselController {
  constructor(private vesselService: VesselService) {}

  // Get vessel by id
  @Get(':id')
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @ApiOperation({ summary: 'Get vessel by id' })
  @ApiQuery({
    name: 'include',
    required: false,
    description: 'Include relations',
    example: ALLOWED_INCLUDES.join(', '),
  })
  @ApiResponse({ type: ResponseVesselDto, description: 'Vessel' })
  getVessel(
    @Param('id', ParseIntPipe) id: number,
    @Query('include') include: string | undefined,
  ): Promise<Vessel> {
    return this.vesselService.getVessel(id, include);
  }

  // Get all vessels
  @Get()
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @ApiOperation({ summary: 'Get all vessels' })
  @ApiResponse({
    type: ResponseVesselDto,
    description: 'Vessel',
    isArray: true,
  })
  @ApiQuery({ type: QueryVesselDto, required: false })
  getVessels(@Query() query: QueryVesselDto) {
    return this.vesselService.getVessels(query);
  }

  @Post()
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @ApiOperation({ summary: 'Create vessel' })
  @ApiQuery({
    name: 'include',
    required: false,
    description: 'Include relations',
    example: ALLOWED_INCLUDES.join(', '),
  })
  @ApiResponse({ type: ResponseVesselDto, description: 'Vessel created.' })
  createVessel(
    @Body() data: CreateVesselDto,
    @Query('include') include: string,
  ): Promise<Vessel> {
    return this.vesselService.create(data, include);
  }

  @Put(':id')
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @ApiOperation({ summary: 'Update vessel by id' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'vessel id',
    example: 1,
  })
  @ApiQuery({
    name: 'include',
    required: false,
    description: 'Include relations',
    example: ALLOWED_INCLUDES.join(', '),
  })
  @ApiResponse({ type: ResponseVesselDto, description: 'Vessel updated.' })
  updateVessel(
    @Body() data: UpdateVesselDto,
    @Param('id') id: number,
    @Query('include') include: string,
  ): Promise<Vessel> {
    return this.vesselService.update(id, data, include);
  }

  @ApiOperation({ summary: 'Delete vessel by id' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'vessel id',
    example: 1,
  })
  @ApiResponse({ type: ResponseVesselDto, description: 'Vessel deleted.' })
  @Delete(':id')
  deleteVessel(@Param('id', ParseIntPipe) id: number): Promise<Vessel> {
    return this.vesselService.delete(id);
  }
}
