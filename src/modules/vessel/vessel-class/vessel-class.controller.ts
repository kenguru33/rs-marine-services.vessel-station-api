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
import { VesselClass } from '@prisma/client';
import { QueryParamsValidatorInterceptor } from '../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { CreateVesselClassDto } from './dto/createVesselClass.dto';
import { QueryVesselClassFilterDto } from './dto/query-vessel-class-filter.dto';
import { QueryVesselClassIncludeDto } from './dto/query-vessel-class-include.dto';
import { UpdateVesselClassDto } from './dto/updateVesselClass.dto';
import { VesselClassTransformInterceptor } from './interceptors/vessel-class-transform.interceptor';
import { VesselClassService } from './vessel-class.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseVesselTypeDto } from '../vessel-type/dto/response-vessel-type.dto';

@ApiTags('vessel-class')
@UseInterceptors(VesselClassTransformInterceptor)
@Controller('vessel-class')
export class VesselClassController {
  constructor(private vesselClassService: VesselClassService) {}

  @ApiOperation({ summary: 'Get a vessel class' })
  @ApiResponse({type: ResponseVesselTypeDto})
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  vesselClass(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryVesselClassIncludeDto: QueryVesselClassIncludeDto,
  ): Promise<VesselClass> {
    return this.vesselClassService.getVesselClass(
      id,
      queryVesselClassIncludeDto,
    );
  }

  @ApiOperation({ summary: 'Get all vessel classes' })
  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  vesselClasses(
    @Query() queryVesselClassIncludeDto: QueryVesselClassIncludeDto,
    @Query() queryVesselClassFilterDto: QueryVesselClassFilterDto,
  ) {
    return this.vesselClassService.getVesselClasses(
      queryVesselClassIncludeDto,
      queryVesselClassFilterDto,
    );
  }

  @ApiOperation({ summary: 'Create a vessel class' })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createVesselClass(
    @Body() data: CreateVesselClassDto,
    @Query() queryVesselClassIncludeDto: QueryVesselClassIncludeDto,
  ) {
    return this.vesselClassService.createVesselClass(
      data,
      queryVesselClassIncludeDto,
    );
  }

  @ApiOperation({ summary: 'Update a vessel class' })
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  updateVesselClass(
    @Body() data: UpdateVesselClassDto,
    @Param('id') id: number,
    @Query() queryVesselClassIncludeDto: QueryVesselClassIncludeDto,
  ) {
    return this.vesselClassService.updateVesselClass(
      id,
      data,
      queryVesselClassIncludeDto,
    );
  }

  @ApiOperation({ summary: 'Delete a vessel class' })
  @Delete(':id')
  deleteVesselClass(@Param('id', ParseIntPipe) id: number) {
    return this.vesselClassService.deleteVesselClass(id);
  }
}
