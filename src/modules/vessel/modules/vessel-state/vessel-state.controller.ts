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
import { VesselStateService } from './vessel-state.service';
import { CreateVesselStateDto } from './dto/createVesselState.dto';
import { UpdateVesselStateDto } from './dto/updateVesselState.dto';
import { VesselStateResponseTransformInterceptor } from './interceptors/vessel-capability-response-transform.interceptor';
import { ALLOWED_FILTERS, ALLOWED_INCLUDES } from './constants';
import { QueryParamsValidatorInterceptor } from '../../../../shared/interceptors/query-params-validator.interceptor';
import { QueryVesselStateDto } from './dto/query-vessel-state.dto';

@UseInterceptors(VesselStateResponseTransformInterceptor)
@Controller('vessel-state')
export class VesselStateController {
  constructor(private vesselStateService: VesselStateService) {}

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Get(':id')
  async getState(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: QueryVesselStateDto,
  ) {
    return this.vesselStateService.getState(id, query);
  }

  @UseInterceptors(
    new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES, ALLOWED_FILTERS),
  )
  @Get()
  async getStates(query: QueryVesselStateDto) {
    return this.vesselStateService.getStates(query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createSubState(
    @Body() data: CreateVesselStateDto,
    @Query() query: QueryVesselStateDto,
  ) {
    return this.vesselStateService.createSubState(data, query);
  }

  @UseInterceptors(new QueryParamsValidatorInterceptor(ALLOWED_INCLUDES))
  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateSubState(
    @Body() data: UpdateVesselStateDto,
    @Param('id', ParseIntPipe) id: number,
    @Query() query: QueryVesselStateDto,
  ) {
    return this.vesselStateService.updateSubState(id, data, query);
  }

  @Delete(':id')
  async deleteSubState(@Param('id', ParseIntPipe) id: number) {
    return this.vesselStateService.deleteSubState(id);
  }
}
