import { Injectable } from '@nestjs/common';
import { CreateVesselStateDto } from './dto/createVesselState.dto';
import { UpdateVesselStateDto } from './dto/updateVesselState.dto';
import { Prisma, VesselState, VesselStateCategory } from '@prisma/client';
import { PrismaService } from '../../../../database/prisma.service';
import { QueryVesselStateDto } from './dto/query-vessel-state.dto';

export type VesselStateWithStateCategory = Partial<VesselStateCategory> & {
  stateCategory?: Partial<VesselStateCategory>;
};

@Injectable()
export class VesselStateService {
  constructor(private prisma: PrismaService) {}

  async getState(id: number, query: QueryVesselStateDto): Promise<VesselState> {
    const vesselStateInclude =
      await this.prisma.parseInclude<Prisma.VesselStateInclude>(query.include);
    return this.prisma.vesselState.findUniqueOrThrow({
      where: { id },
      include: vesselStateInclude,
    });
  }

  async getStates(query: QueryVesselStateDto): Promise<VesselState[]> {
    const { include, ...where } = query;
    const vesselStatePrismaInclude =
      await this.prisma.parseInclude<Prisma.VesselStateInclude>(include);
    return this.prisma.vesselState.findMany({
      include: vesselStatePrismaInclude,
      where,
    });
  }

  async createSubState(
    data: CreateVesselStateDto,
    query: QueryVesselStateDto,
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
    query: QueryVesselStateDto,
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
