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
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
  PickType,
} from '@nestjs/swagger';
import { VesselClass } from '@prisma/client';
import { QueryParamsValidatorInterceptor } from '../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { CreateVesselClassDto } from './dto/createVesselClass.dto';
import { QueryVesselClassDto } from './dto/query-vessel-class.dto';
import { ResponseVesselClassDto } from './dto/response-vessel-class.dto';
import { UpdateVesselClassDto } from './dto/updateVesselClass.dto';
import { VesselClassTransformInterceptor } from './interceptors/vessel-class-transform.interceptor';
import { VesselClassService } from './vessel-class.service';

// vessel-class.controller.ts
@ApiTags('vessel-class')
@UseInterceptors(VesselClassTransformInterceptor)
@Controller('vessel-class')
export class VesselClassController {
  constructor(private vesselClassService: VesselClassService) {}

  // Get vessel class by id
  @Get(':id')
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @ApiOperation({ summary: 'Get vessel classe by id' })
  @ApiQuery({
    type: PickType(QueryVesselClassDto, ['include']),
    required: false,
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'vessel class id',
    example: 1,
  })
  @ApiResponse({
    type: ResponseVesselClassDto,
    isArray: true,
  })
  vesselClass(
    @Param('id', ParseIntPipe) id: number,
    @Query() include: QueryVesselClassDto['include'],
  ): Promise<VesselClass> {
    return this.vesselClassService.vesselClass(id, include);
  }

  // Get all vessel classes
  @Get()
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @ApiOperation({ summary: 'Get all vessel classes' })
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
  @ApiResponse({
    type: ResponseVesselClassDto,
    isArray: true,
    description: 'Array of vessel types',
  })
  vesselClasses(@Query() query: QueryVesselClassDto) {
    return this.vesselClassService.vesselClasses(query);
  }

  // Post veseel class
  @Post()
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Create vessel class' })
  @ApiQuery({
    name: 'include',
    required: false,
    description: 'include relations. Allowed values: vessels',
    example: 'vessels',
  })
  @ApiResponse({
    type: CreateVesselClassDto,
    description: 'The vessel class has been successfully created.',
  })
  createVesselClass(
    @Body() data: CreateVesselClassDto,
    @Query() query: QueryVesselClassDto,
  ) {
    return this.vesselClassService.createVesselClass(data, query);
  }

  // Update vessel class
  @Put(':id')
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Update vessel class' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'vessel class id',
    example: 1,
  })
  @ApiQuery({
    name: 'include',
    required: false,
    description: 'include relations. Allowed values: vessels',
    example: 'vessels',
  })
  @ApiResponse({
    type: CreateVesselClassDto,
    description: 'The vessel class has been successfully updated.',
  })
  updateVesselClass(
    @Body() data: UpdateVesselClassDto,
    @Param('id') id: number,
    @Query() query: QueryVesselClassDto,
  ) {
    return this.vesselClassService.updateVesselClass(id, data, query);
  }

  // Delete vessel class
  @ApiOperation({ summary: 'Delete vessel class' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'vessel class id',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'The vessel class has been successfully deleted.',
  })
  @Delete(':id')
  deleteVesselClass(@Param('id', ParseIntPipe) id: number) {
    return this.vesselClassService.deleteVesselClass(id);
  }
}
