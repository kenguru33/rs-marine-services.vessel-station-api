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

@UseInterceptors(VesselClassTransformInterceptor)
@Controller('vessel-type')
export class VesselTypeController {
  constructor(private vesselTypeService: VesselTypeService) {}

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getVesselTypes(@Query() query: QueryVesselTypeDto) {
    return this.vesselTypeService.getVesselTypes(query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getVesselType(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: QueryVesselTypeDto,
  ) {
    return this.vesselTypeService.getVesselType(id, query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createVesselType(
    @Body() dto: CreateVesselTypeDto,
    @Query() query: QueryVesselTypeDto,
  ) {
    return this.vesselTypeService.createVesselType(dto, query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateVesselType(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateVesselTypeDto,
    @Query() query: QueryVesselTypeDto,
  ) {
    return this.vesselTypeService.updateVesselType(id, dto, query);
  }

  @Delete(':id')
  async deleteVesselType(@Param('id', ParseIntPipe) id: number) {
    return this.vesselTypeService.deleteVesselType(id);
  }
}
