import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { VesselCapabilitiesService } from './vessel-capabilities.service';
import { CreateVesselCapabilityDto } from './dto/createVesselCapability.dto';

@Controller('vessel-capabilities')
export class VesselCapabilitiesController {
  constructor(private capabilitiesService: VesselCapabilitiesService) {}

  @Get()
  async getCapabilities() {
    return this.capabilitiesService.capabilities({});
  }

  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createCapability(@Body() data: CreateVesselCapabilityDto) {
    const { name, description } = data;
    return this.capabilitiesService.createCapability({ name, description });
  }
}
