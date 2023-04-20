import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateVesselStateDto } from './dto/createVesselState.dto';
import { CreateVesselSubStateDto } from './dto/createVesselSubState.dto';
import { VesselStateWithRelation, VesselStatesService } from './vesselStates.service';
import { UpdateVesselStateDto } from './dto/updateVesselState.dto';
import { UpdateVesselSubStateDto } from './dto/updateVesselSubState.dto';
import { VesselState } from '@prisma/client';

@Controller('vessel-states')
export class VesselStatesController {
  constructor(private statesService: VesselStatesService) {}

  @Get(':id')
  async state(@Param('id', ParseIntPipe) id: number): Promise<VesselStateWithRelation> {
    return this.statesService.state(id);
  }

  @Get()
  async states(): Promise<VesselStateWithRelation[]> {
    return this.statesService.states();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createState(@Body() data: CreateVesselStateDto): Promise<VesselState> {
    return this.statesService.createState(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateState(
    @Body() data: UpdateVesselStateDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<VesselStateWithRelation> {
    return this.statesService.updateState(id, data);
  }

  @Delete(':id')
  async deleteState(@Param('id', ParseIntPipe) id: number) {
    return this.statesService.deleteState(id);
  }
}
