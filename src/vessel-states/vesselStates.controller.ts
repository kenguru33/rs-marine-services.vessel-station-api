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

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createState(@Body() data: CreateVesselStateDto) {
    return this.statesService.createState(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateState(
    @Body() data: UpdateVesselStateDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    console.log('hit update state');
    return this.statesService.updateState(id, data);
  }

  @Delete(':id')
  async deleteState(@Param('id', ParseIntPipe) id: number) {
    return this.statesService.deleteState(id);
  }
}
