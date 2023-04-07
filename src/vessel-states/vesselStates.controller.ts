import {
  Body,
  Controller,
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
import { VesselStatesService } from './vesselStates.service';
import { UpdateVesselStateDto } from './dto/updateVesselState.dto';
import { UpdateVesselSubStateDto } from './dto/updateVesselSubState.dto';

@Controller('vessel-states')
export class VesselStatesController {
  constructor(private statesService: VesselStatesService) {}

  @Get(':id')
  async state(@Param('id', ParseIntPipe) id: number) {
    console.log('states');
    return this.statesService.state(id);
  }

  @Get()
  async states() {
    console.log('states');
    return this.statesService.states();
  }

  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createState(@Body() data: CreateVesselStateDto) {
    return this.statesService.createState(data);
  }

  @Post('create-substate')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createSubState(@Body() data: CreateVesselSubStateDto) {
    return this.statesService.createSubState(data);
  }

  @Put(':id/update')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateState(
    @Body() data: UpdateVesselStateDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    console.log('hit update state');
    return this.statesService.updateState(id, data);
  }

  @Put(':id/update-substate')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateSubState(
    @Body() data: UpdateVesselSubStateDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    console.log('hit update substate');
    return this.statesService.updateSubState(id, data);
  }
}
