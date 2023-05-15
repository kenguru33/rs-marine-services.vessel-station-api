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
import { VesselCapabilityResponseTransformInterceptor } from './interceptors/vessel-crew-response-transform.interceptor';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { ALLOWED_INCLUDES, ALLOWED_FILTERS } from './contstants';
import { QueryVesselCrewDto } from './dto/query-vessel-crew.dto';
@UseInterceptors(VesselCapabilityResponseTransformInterceptor)
@Controller('vessel-crew')
export class VesselCrewController {
  constructor(private vesselCrewService: VesselCrewService) {}

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getVesselCrews(@Query() query: QueryVesselCrewDto) {
    return await this.vesselCrewService.getVesselCrews(query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getVesselCrew(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: QueryVesselCrewDto,
  ) {
    return await this.vesselCrewService.getVesselCrew(id, query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createVesselCrew(
    @Body() data: CreateVesselCrewDto,
    @Query() query: QueryVesselCrewDto,
  ) {
    return await this.vesselCrewService.createVesselCrew(data, query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateVesselCrew(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselCrewDto,
    @Query() query: QueryVesselCrewDto,
  ) {
    return await this.vesselCrewService.updateVesselCrew(id, data, query);
  }

  @Delete(':id')
  async deleteVesselCrew(@Param('id', ParseIntPipe) id: number) {
    return await this.vesselCrewService.deleteVesselCrew(id);
  }
}
