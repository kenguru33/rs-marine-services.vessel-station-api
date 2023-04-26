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
import { VesselStateService } from './vessel-state.service';
import { CreateVesselStateDto } from './dto/createVesselState.dto';
import { UpdateVesselStateDto } from './dto/updateVesselState.dto';

@Controller('vessel-state')
export class VesselStateController {
  constructor(private vesselStateService: VesselStateService) {}

  @Get(':id')
  async subState(@Param('id', ParseIntPipe) id: number) {
    return this.vesselStateService.getState(id);
  }

  @Get()
  async subStates() {
    return this.vesselStateService.getStates();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createSubState(@Body() data: CreateVesselStateDto) {
    return this.vesselStateService.createSubState(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateSubState(
    @Body() data: UpdateVesselStateDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.vesselStateService.updateSubState(id, data);
  }

  @Delete(':id')
  async deleteSubState(@Param('id', ParseIntPipe) id: number) {
    return this.vesselStateService.deleteSubState(id);
  }
}
