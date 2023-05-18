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
import { VesselTypeService } from './vessel-type.service';
import { CreateVesselTypeDto } from './dto/create-vessel-type.dto';
import { UpdateVesselTypeDto } from './dto/update-vessel-type.dto';
import { VesselClassTransformInterceptor } from '../vessel-class/interceptors/vessel-class-transform.interceptor';
import { QueryParamsValidatorInterceptor } from '../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryVesselTypeDto } from './dto/query-vessel-type.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ResponseVesselTypeDto } from './dto/response-vessel-type.dto';

@ApiTags('vessel-type')
@UseInterceptors(VesselClassTransformInterceptor)
@Controller('vessel-type')
export class VesselTypeController {
  constructor(private vesselTypeService: VesselTypeService) {}

  @Get()
  @ApiOperation({ summary: 'Get all vessel types' })
  @ApiQuery({
    name: 'include',
    required: false,
    description: 'include relations. Allowed values: vessels',
    example: 'vessels',
  })
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'filter by contains value',
    example: 'name=Halfdan',
  })
  @ApiQuery({
    name: 'prefix',
    required: false,
    description: 'filter by match value',
    example: 'prefix=RS',
  })
  @ApiResponse({
    type: ResponseVesselTypeDto,
    isArray: true,
    description: 'Array of vessel types',
  })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  async getVesselTypes(@Query() query: QueryVesselTypeDto) {
    return this.vesselTypeService.getVesselTypes(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get vessel type by id' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'vessel type id',
    example: 1,
  })
  @ApiQuery({
    name: 'include',
    required: false,
    description: 'include relations. Allowed values: vessels',
    example: 'vessels',
  })
  @ApiResponse({ type: ResponseVesselTypeDto, isArray: false })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  async getVesselType(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: QueryVesselTypeDto,
  ) {
    return this.vesselTypeService.getVesselType(id, query);
  }

  @Post()
  @ApiOperation({ summary: 'Create vessel type' })
  @ApiQuery({
    name: 'include',
    required: false,
    description: 'Include relations. Allowed values: vessels',
    example: 'vessels',
  })
  @ApiCreatedResponse({
    description: 'The vessel type has been successfully created.',
    type: ResponseVesselTypeDto,
  })
  @ApiBody({ type: CreateVesselTypeDto, required: true })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  async createVesselType(
    @Body() dto: CreateVesselTypeDto,
    @Query() query: QueryVesselTypeDto,
  ) {
    return this.vesselTypeService.createVesselType(dto, query);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update vessel type' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'Vessel type id',
    example: 1,
  })
  @ApiQuery({
    name: 'include',
    required: false,
    description: 'Include relations. Allowed values: vessels',
    example: 'vessels',
  })
  @ApiCreatedResponse({
    description: 'The vessel type has been successfully updated.',
    type: ResponseVesselTypeDto,
  })
  @ApiBody({ type: UpdateVesselTypeDto, required: true })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  async updateVesselType(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateVesselTypeDto,
    @Query() query: QueryVesselTypeDto,
  ) {
    return this.vesselTypeService.updateVesselType(id, dto, query);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete vessel type' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'Vessel type id',
    example: 1,
  })
  @ApiResponse({type: ResponseVesselTypeDto, isArray: false, description: 'Deleted vessel type', status: 200})
  async deleteVesselType(@Param('id', ParseIntPipe) id: number) {
    return this.vesselTypeService.deleteVesselType(id);
  }
}
