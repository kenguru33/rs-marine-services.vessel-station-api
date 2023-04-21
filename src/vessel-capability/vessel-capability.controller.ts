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
import { VesselCapabilityService } from './vessel-capabilities.service';
import { CreateVesselCapabilityDto } from './dto/createVesselCapability.dto';
import { UpdateVesselCapabilityDto } from './dto/updateVesselCapability.dto';
import { VesselCapability } from '@prisma/client';

@Controller('vessel-capability')
export class VesselCapabilityController {
  constructor(private capabilitiesService: VesselCapabilityService) {}

  @Get()
  async getCapabilities(): Promise<VesselCapability[]> {
    return this.capabilitiesService.getCapabilities();
  }

  @Get(':id')
  async getCapability(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<VesselCapability> {
    return this.capabilitiesService.getCapability(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createCapability(
    @Body() dto: CreateVesselCapabilityDto,
  ): Promise<VesselCapability> {
    return this.capabilitiesService.createCapability(dto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateCapability(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateVesselCapabilityDto,
  ): Promise<VesselCapability> {
    return this.capabilitiesService.updateCapability(id, dto);
  }

  @Delete(':id')
  async deleteCapability(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<VesselCapability> {
    return this.capabilitiesService.deleteCapability(id);
  }
}
