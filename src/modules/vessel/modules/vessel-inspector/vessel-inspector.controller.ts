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
import { VesselInspectorService } from './vessel-inspector.service';
import { CreateVesselInspectorDto } from './dto/create-vessel-inspector.dto';
import { UpdateVesselInspectorDto } from './dto/update-vessel-inspector.dto';
import { VesselInspectorTransformInterceptor } from './interceptor/vessel-inspector-transform.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { QueryVesselInspectorDto } from './dto/query-vessel-inspector.dto';

@UseInterceptors(VesselInspectorTransformInterceptor)
@Controller('vessel-inspector')
export class VesselInspectorController {
  constructor(private vessselInspectorService: VesselInspectorService) {}

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getVesselInspector(@Param('id', ParseIntPipe) id: number) {
    return await this.vessselInspectorService.getVesselInspector(id);
  }

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getVesselInspectors(@Query() query: QueryVesselInspectorDto) {
    return await this.vessselInspectorService.getVesselInspectors(query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  async createVesselInspector(
    @Body() data: CreateVesselInspectorDto,
    @Query() query: QueryVesselInspectorDto,
  ) {
    return await this.vessselInspectorService.createVesselInspector(
      data,
      query,
    );
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  async updateVesselInspector(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselInspectorDto,
    @Query() query: QueryVesselInspectorDto,
  ) {
    return await this.vessselInspectorService.updateVesselInspector(id, data, query);
  }

  @Delete(':id')
  async deleteVesselInspector(@Param('id', ParseIntPipe) id: number) {
    return await this.vessselInspectorService.deleteVesselInspector(id);
  }
}
