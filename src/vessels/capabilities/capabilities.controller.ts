import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CapabilitiesService } from './capabilities.service';
import { CreateCapabilityDto } from './dto/createCapability.dto';

@Controller('vessels/capabilities')
export class CapabilitiesController {
  constructor(private capabilitiesService: CapabilitiesService) {}

  @Get()
  async getCapabilities() {
    return this.capabilitiesService.capabilities({});
  }

  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createCapability(@Body() data: CreateCapabilityDto) {
    const { name, description } = data;
    return this.capabilitiesService.createCapability({ name, description });
  }
}
