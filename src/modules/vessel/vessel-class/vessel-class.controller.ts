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
import { CreateVesselClassDto } from './dto/createVesselClass.dto';
import { UpdateVesselClassDto } from './dto/updateVesselClass.dto';
import { VesselClass } from '@prisma/client';
import { VesselClassService } from './vessel-class.service';
import { VesselClassTransformInterceptor } from './interceptors/vessel-class-transform.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryParamsValidatorInterceptor } from '../../../shared/interceptors/query-params-validator.interceptor';
import { QueryVesselClassDto } from './dto/query-vessel-class.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('vessel-class')
@UseInterceptors(VesselClassTransformInterceptor)
@Controller('vessel-class')
export class VesselClassController {
  constructor(private vesselClassService: VesselClassService) {}

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  vesselClass(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: QueryVesselClassDto,
  ): Promise<VesselClass> {
    return this.vesselClassService.vesselClass(id, query);
  }

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  vesselClasses(@Query() query: QueryVesselClassDto) {
    return this.vesselClassService.vesselClasses(query);
  }

  @Post()
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @UsePipes(new ValidationPipe({ transform: true }))
  createVesselClass(
    @Body() data: CreateVesselClassDto,
    @Query() query: QueryVesselClassDto,
  ) {
    return this.vesselClassService.createVesselClass(data, query);
  }

  @Put(':id')
  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @UsePipes(new ValidationPipe({ transform: true }))
  updateVesselClass(
    @Body() data: UpdateVesselClassDto,
    @Param('id') id: number,
    @Query() query: QueryVesselClassDto,
  ) {
    return this.vesselClassService.updateVesselClass(id, data, query);
  }

  @Delete(':id')
  deleteVesselClass(@Param('id', ParseIntPipe) id: number) {
    return this.vesselClassService.deleteVesselClass(id);
  }
}
