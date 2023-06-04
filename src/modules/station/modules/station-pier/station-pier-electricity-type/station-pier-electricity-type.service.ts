import {
  Body,
  Delete,
  Get,
  Injectable,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PrismaService } from '../../../../../database/prisma.service';
import { QueryStationPierElectricityTypeIncludeDto } from './dto/query-station-pier-electricity-type-include.dto';
import { QueryStationPierElectricityTypeFilterDto } from './dto/query-station-pier-electricity-type-filter.dto';
import { Prisma } from '@prisma/client';
import { CreateStationPierElectricityTypeDto } from './dto/create-station-pier-electricity-type.dto';
import { UpdateStationElectricityTypeDto } from './dto/update-station-pier-electricity-type.dto';

@Injectable()
export class StationPierElectricityTypeService {
  constructor(private prisma: PrismaService) {}

  async getStationPierElectricityTypes(
    queryInclude: QueryStationPierElectricityTypeIncludeDto,
    queryFilter: QueryStationPierElectricityTypeFilterDto,
  ) {
    const stationPierElectricityTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationPierElictricityTypeInclude>(
        queryInclude.include,
      );
    return this.prisma.stationPierElictricityType.findMany({
      include: stationPierElectricityTypeIncludes,
      where: {
        name: {
          contains: queryFilter.name,
        },
      },
    });
  }

  @Get(':id')
  async getStationPierElectricityType(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryInclude: QueryStationPierElectricityTypeIncludeDto,
  ) {
    const stationPierElectricityTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationPierElictricityTypeInclude>(
        queryInclude.include,
      );
    return this.prisma.stationPierElictricityType.findUnique({
      where: { id },
      include: stationPierElectricityTypeIncludes,
    });
  }

  @Post()
  async createStationPierElectricityType(
    @Body() data: CreateStationPierElectricityTypeDto,
    @Query() queryInclude: QueryStationPierElectricityTypeIncludeDto,
  ) {
    const stationPierElectricityTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationPierElictricityTypeInclude>(
        queryInclude.include,
      );
    return this.prisma.stationPierElictricityType.create({
      data: {
        name: data.name,
        description: data?.description,
      },
      include: stationPierElectricityTypeIncludes,
    });
  }

  @Put(':id')
  async updateStationPierElectricityType(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateStationElectricityTypeDto,
    queryInclude: QueryStationPierElectricityTypeIncludeDto,
  ) {
    const stationPierElectricityTypeIncludes =
      await this.prisma.parseInclude<Prisma.StationPierElictricityTypeInclude>(
        queryInclude.include,
      );
    return this.prisma.stationPierElictricityType.update({
      where: { id },
      data: {
        name: data.name,
        description: data?.description,
      },
      include: stationPierElectricityTypeIncludes,
    });
  }

  @Delete(':id')
  async deleteStationPierElectricityType(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.prisma.stationPierElictricityType.delete({
      where: { id },
    });
  }
}
