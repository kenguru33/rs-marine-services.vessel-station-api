import { Injectable } from '@nestjs/common';
import { CreateVesselStateCategoryDto } from './dto/createVesselStateCategory.dto';
import { Prisma, VesselStateCategory } from '@prisma/client';
import { UpdateVesselStateCategoryDto } from './dto/updateVesselStateCategory.dto';
import { PrismaService } from '../../../../../database/prisma.service';
import { QueryVesselStateCategoryIncludeDto } from './dto/query-vessel-state-category-include.dto';
import { QueryVesselStateCategoryFilterDto } from './dto/query-vessel-state-category-filter.dto';

export type VesselStateCategoryWithStates = Partial<VesselStateCategory> & {
  states?: Partial<VesselStateCategory>;
};

@Injectable()
export class VesselStateCategoryService {
  constructor(private prisma: PrismaService) {}

  async getStateCategory(
    id: number,
    queryInclude: QueryVesselStateCategoryIncludeDto,
  ): Promise<VesselStateCategory> {
    const vesselStateCategoryIncludes =
      await this.prisma.parseInclude<Prisma.VesselStateCategoryInclude>(
        queryInclude.include,
      );
    return this.prisma.vesselStateCategory.findUniqueOrThrow({
      where: { id },
      include: vesselStateCategoryIncludes,
    });
  }

  async getStateCategories(
    queryInclude: QueryVesselStateCategoryIncludeDto,
    queryFilter: QueryVesselStateCategoryFilterDto,
  ): Promise<VesselStateCategory[]> {
    const vesselStateCategoryIncludes =
      await this.prisma.parseInclude<Prisma.VesselStateCategoryInclude>(
        queryInclude.include,
      );
    return this.prisma.vesselStateCategory.findMany({
      include: vesselStateCategoryIncludes,
      where: queryFilter,
    });
  }

  async createStateCategory(
    data: CreateVesselStateCategoryDto,
    queryInclude: QueryVesselStateCategoryIncludeDto,
  ): Promise<VesselStateCategory> {
    const vesselStateCategoryIncludes =
      await this.prisma.parseInclude<Prisma.VesselStateCategoryInclude>(
        queryInclude.include,
      );
    return this.prisma.vesselStateCategory.create({
      data: {
        name: data.name,
        description: data.description,
      },
      include: vesselStateCategoryIncludes,
    });
  }

  async updateStateCategory(
    id: number,
    data: UpdateVesselStateCategoryDto,
    queryInclude: QueryVesselStateCategoryIncludeDto,
  ): Promise<VesselStateCategory> {
    const vesselStateCategoryIncludes =
      await this.prisma.parseInclude<Prisma.VesselStateCategoryInclude>(
        queryInclude.include,
      );
    const { description, inUse, name } = data;
    return this.prisma.vesselStateCategory.update({
      where: {
        id,
      },
      data: {
        name: name,
        description: description,
        inUse: inUse,
      },
      include: vesselStateCategoryIncludes,
    });
  }

  async deleteStateStateCategory(id: number): Promise<VesselStateCategory> {
    return this.prisma.vesselStateCategory.delete({
      where: {
        id,
      },
    });
  }
}
