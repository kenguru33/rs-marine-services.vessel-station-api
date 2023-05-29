import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateVesselStateCategoryDto } from './dto/createVesselStateCategory.dto';

import { VesselStateCategory } from '@prisma/client';
import { VesselStateCategoryService } from './vessel-state-category.service';
import { UpdateVesselStateCategoryDto } from './dto/updateVesselStateCategory.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryVesselStateCategoryIncludeDto } from './dto/query-vessel-state-category-include.dto';
import { QueryVesselStateCategoryFilterDto } from './dto/query-vessel-state-category-filter.dto';
import { ResponseVesselStateCategoryDto } from './dto/response-vessel-state-category.dto';

@ApiTags('vessel-state-category')
@Controller('vessel-state-category')
export class VesselStateCategoryController {
  constructor(private stateCategoryService: VesselStateCategoryService) {}

  @ApiOperation({ summary: 'Get vessel state category by id' })
  @ApiResponse({ type: ResponseVesselStateCategoryDto })
  @Get(':id')
  async state(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryVesselStateCategoryIncludeDto,
  ): Promise<VesselStateCategory> {
    return this.stateCategoryService.getStateCategory(id, queryInclude);
  }

  @ApiOperation({ summary: 'Get all vessel state categories' })
  @ApiResponse({ type: ResponseVesselStateCategoryDto })
  @Get()
  async getStatesCategories(
    @Query() queryInclude: QueryVesselStateCategoryIncludeDto,
    @Query() queryFilter: QueryVesselStateCategoryFilterDto,
  ): Promise<VesselStateCategory[]> {
    return this.stateCategoryService.getStateCategories(
      queryInclude,
      queryFilter,
    );
  }

  @ApiOperation({ summary: 'Create vessel state category' })
  @ApiResponse({ type: ResponseVesselStateCategoryDto })
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createStateCategory(
    @Body() data: CreateVesselStateCategoryDto,
    @Query() queryInclude: QueryVesselStateCategoryIncludeDto,
  ): Promise<VesselStateCategory> {
    return this.stateCategoryService.createStateCategory(data, queryInclude);
  }

  @ApiOperation({ summary: 'Update vessel state category' })
  @ApiResponse({ type: ResponseVesselStateCategoryDto })
  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateStateCategory(
    @Body() data: UpdateVesselStateCategoryDto,
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryVesselStateCategoryIncludeDto,
  ): Promise<VesselStateCategory> {
    return this.stateCategoryService.updateStateCategory(
      id,
      data,
      queryInclude,
    );
  }

  @ApiOperation({ summary: 'Delete vessel state category' })
  @ApiResponse({ type: ResponseVesselStateCategoryDto })
  @Delete(':id')
  async deleteStateCategory(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<VesselStateCategory> {
    return this.stateCategoryService.deleteStateStateCategory(id);
  }
}
