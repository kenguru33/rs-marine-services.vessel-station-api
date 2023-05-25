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
import { VesselCrewService } from './vessel-crew.service';
import { CreateVesselCrewDto } from './dto/create-vessel-crew.dto';
import { UpdateVesselCrewDto } from './dto/update-vessel-crew.dto';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_INCLUDES, ALLOWED_FILTERS } from './contstants';
import { QueryVesselCrewFilterDto } from './dto/query-vessel-crew-filter.dto';
import { VesselCrewResponseTransformInterceptor } from './interceptors/vessel-crew-response-transform.interceptor';
import { QueryVesselCrewIncludeDto } from './dto/query-vesel-cew-include.dto';

@UseInterceptors(VesselCrewResponseTransformInterceptor)
@Controller('vessel-crew')
export class VesselCrewController {
  constructor(private vesselCrewService: VesselCrewService) {}

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getVesselCrews(
    @Query() queryInclude: QueryVesselCrewIncludeDto,
    @Query() queryFilter: QueryVesselCrewFilterDto,
  ) {
    return await this.vesselCrewService.getVesselCrews(
      queryInclude,
      queryFilter,
    );
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getVesselCrew(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryVesselCrewIncludeDto,
  ) {
    return await this.vesselCrewService.getVesselCrew(id, queryInclude);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createVesselCrew(
    @Body() data: CreateVesselCrewDto,
    @Query() queryInclude: QueryVesselCrewIncludeDto,
  ) {
    return await this.vesselCrewService.createVesselCrew(data, queryInclude);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateVesselCrew(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselCrewDto,
    @Query() queryInclude: QueryVesselCrewIncludeDto,
  ) {
    return await this.vesselCrewService.updateVesselCrew(
      id,
      data,
      queryInclude,
    );
  }

  @Delete(':id')
  async deleteVesselCrew(@Param('id', ParseIntPipe) id: number) {
    return await this.vesselCrewService.deleteVesselCrew(id);
  }
}
