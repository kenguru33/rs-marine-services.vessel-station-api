import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateVesselStateDto } from './dto/createVesselState.dto';
import { CreateVesselSubStateDto } from './dto/createVesselSubState.dto';
import { VesselStatesService } from './vesselStates.service';

@Controller('vessel-states')
export class VesselStatesController {
  constructor(private statesService: VesselStatesService) {}

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
}
