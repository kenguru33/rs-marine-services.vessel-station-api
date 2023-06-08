import { Injectable } from '@nestjs/common';
import { CreateVesselStateDto } from './dto/createVesselState.dto';
import { UpdateVesselStateDto } from './dto/updateVesselState.dto';
import { Prisma, VesselState, VesselStateCategory } from '@prisma/client';
import { PrismaService } from '../../../../database/prisma.service';
import { QueryVesselStateIncludeDto } from './dto/query-vessel-state-include.dto';
import { QueryVesselStateFilterDto } from './dto/query-vessel-state-filter.dto';

export type VesselStateWithStateCategory = Partial<VesselStateCategory> & {
  stateCategory?: Partial<VesselStateCategory>;
};

@Injectable()
export class VesselStateService {
  constructor(private prisma: PrismaService) {}

  async getState(
    id: number,
    queryInclude: QueryVesselStateIncludeDto,
  ): Promise<VesselState> {
    const vesselStateInclude =
      await this.prisma.parseInclude<Prisma.VesselStateInclude>(
        queryInclude.include,
      );
    return this.prisma.vesselState.findUniqueOrThrow({
      where: { id },
      include: vesselStateInclude,
    });
  }

  async getStates(
    queryInclude: QueryVesselStateIncludeDto,
    queryFilter: QueryVesselStateFilterDto,
  ): Promise<VesselState[]> {
    const vesselStatePrismaInclude =
      await this.prisma.parseInclude<Prisma.VesselStateInclude>(
        queryInclude.include,
      );
    return this.prisma.vesselState.findMany({
      include: vesselStatePrismaInclude,
      where: {
        name: {
          contains: queryFilter.name ? queryFilter.name : undefined,
        },
      },
    });
  }

  async createSubState(
    data: CreateVesselStateDto,
    query: QueryVesselStateIncludeDto,
  ): Promise<VesselState> {
    const vesselStateInclude =
      await this.prisma.parseInclude<Prisma.VesselStateInclude>(query.include);
    const { name, description, stateCategoryId } = data;
    return this.prisma.vesselState.create({
      data: {
        name,
        description,
        stateCategory: { connect: { id: stateCategoryId } },
      },
      include: vesselStateInclude,
    });
  }

  async updateSubState(
    id: number,
    data: UpdateVesselStateDto,
    query: QueryVesselStateIncludeDto,
  ): Promise<VesselState> {
    const vesselStateInclude =
      await this.prisma.parseInclude<Prisma.VesselStateInclude>(query.include);
    const { description, inUse, name, stateCategoryId } = data;
    return this.prisma.vesselState.update({
      where: {
        id,
      },
      data: {
        name: name,
        description: description,
        inUse: inUse,
        stateCategory: { connect: { id: stateCategoryId } },
      },
      include: vesselStateInclude,
    });
  }

  async deleteSubState(id: number): Promise<VesselState> {
    return this.prisma.vesselState.delete({
      where: {
        id,
      },
    });
  }
}
