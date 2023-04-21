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
import { CreateVesselStateCategoryDto } from './dto/createVesselStateCategory.dto';

import { VesselStateCategory } from '@prisma/client';
import { VesselStateCategoryService } from './vessel-state-category.service';
import { UpdateVesselStateCategoryDto } from './dto/updateVesselStateCategory.dto';

@Controller('vessel-state-category')
export class VesselStateCategoryController {
  constructor(private stateCategoryService: VesselStateCategoryService) {}

  @Get(':id')
  async state(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<VesselStateCategory> {
    return this.stateCategoryService.getStateCategory(id);
  }

  @Get()
  async getStatesCategories(): Promise<VesselStateCategory[]> {
    return this.stateCategoryService.getStateCategories();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createStateCategory(
    @Body() data: CreateVesselStateCategoryDto,
  ): Promise<VesselStateCategory> {
    return this.stateCategoryService.createStateCategory(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateStateCategory(
    @Body() data: UpdateVesselStateCategoryDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<VesselStateCategory> {
    return this.stateCategoryService.updateStateCategory(id, data);
  }

  @Delete(':id')
  async deleteStateCategory(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<VesselStateCategory> {
    return this.stateCategoryService.deleteStateStateCategory(id);
  }
}
