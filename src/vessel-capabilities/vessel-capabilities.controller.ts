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
import { Prisma } from '@prisma/client';
import { VesselCapabilitiesService } from './vessel-capabilities.service';
import { CreateVesselCapabilityDto } from './dto/createVesselCapability.dto';
import { UpdateVesselCapabilityDto } from './dto/updateVesselCapability.dto';

@Controller('vessel-capabilities')
export class VesselCapabilitiesController {
  constructor(private capabilitiesService: VesselCapabilitiesService) {}

  @Get()
  async getCapabilities() {
    return this.capabilitiesService.capabilities();
  }

  @Get(':id')
  async getCapability(@Param('id', ParseIntPipe) id: number) {
    return this.capabilitiesService.capability(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createCapability(@Body() dto: CreateVesselCapabilityDto) {
    return this.capabilitiesService.createCapability(dto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateCapability(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateVesselCapabilityDto,
  ) {
    return this.capabilitiesService.updateCapability(id, dto);
  }

  @Delete(':id')
  async deleteCapability(@Param('id', ParseIntPipe) id: number) {
    return this.capabilitiesService.deleteCapability(id);
  }

}
