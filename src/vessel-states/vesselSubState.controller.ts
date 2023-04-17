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
import { VesselSubStatesService } from './vesselSubStates.service';
import { CreateVesselSubStateDto } from './dto/createVesselSubState.dto';
import { UpdateVesselSubStateDto } from './dto/updateVesselSubState.dto';

@Controller('vessel-substates')
export class VesselSubStatesController {
  constructor(private vesselSubStateService: VesselSubStatesService) {}

  @Get(':id')
  async subState(@Param('id', ParseIntPipe) id: number) {
    return this.vesselSubStateService
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createSubState(@Body() data: CreateVesselSubStateDto) {
    return this.vesselSubStateService.createSubState(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateSubState(
    @Body() data: UpdateVesselSubStateDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.vesselSubStateService.updateSubState(id, data);
  }

  @Delete(':id')
  async deleteSubState(@Param('id', ParseIntPipe) id: number) {
    return this.vesselSubStateService.deleteSubState(id);
  }
}
