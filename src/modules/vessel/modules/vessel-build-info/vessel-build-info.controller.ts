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
import { VesselBuildInfoService } from './vessel-build-info.service';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { VesselBuildInfoResponseTransformInterceptor } from './interceptors/vessel-build-info-response-transform.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryVesselBuildInfoDto } from './dto/query-vessel-build-info.dto';
import { CreateVesselBuildInfoDto } from './dto/create-vessel-build-info.dto';
import { UpdateVesselBuildInfoDto } from './dto/update-vessel-build-info.dto';

@UseInterceptors(VesselBuildInfoResponseTransformInterceptor)
@Controller('vessel-build-info')
export class VesselBuildInfoController {
  constructor(private vesselBuildInfoService: VesselBuildInfoService) {}

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getVesselBuildInfos(@Query() query: QueryVesselBuildInfoDto) {
    return this.vesselBuildInfoService.getVesselBuildInfos(query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getVesselBuildInfo(
    id: number,
    @Query() query: QueryVesselBuildInfoDto,
  ) {
    return this.vesselBuildInfoService.getVesselBuildInfo(id, query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createVesselBuildInfo(
    @Body() dto: CreateVesselBuildInfoDto,
    @Query() query: QueryVesselBuildInfoDto,
  ) {
    return this.vesselBuildInfoService.createVesselBuildInfo(dto, query);
  }

  @Put(':id')
  async updateVesselBuildInfo(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateVesselBuildInfoDto,
    @Query() query: QueryVesselBuildInfoDto,
  ) {
    return this.vesselBuildInfoService.updateVesselBuildInfo(id, dto, query);
  }

  @Delete(':id')
  async deleteVesselBuildInfo(@Param('id', ParseIntPipe) id: number) {
    this.vesselBuildInfoService.deleteVesselBuildInfo(id);
  }
}
