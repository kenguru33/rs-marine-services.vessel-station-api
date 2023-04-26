import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateVesselStateDto } from './dto/createVesselState.dto';
import { UpdateVesselStateDto } from './dto/updateVesselState.dto';
import { VesselState, VesselStateCategory } from '@prisma/client';

export type VesselStateWithStateCategory = Partial<VesselStateCategory> & {
  stateCategory?: Partial<VesselStateCategory>;
};

@Injectable()
export class VesselStateService {
  constructor(private prisma: PrismaService) {}

  async getState(id: number): Promise<VesselState> {
    return this.prisma.vesselState.findUnique({
      where: { id },
    });
  }

  async getStates(): Promise<VesselState[]> {
    return this.prisma.vesselState.findMany({});
  }

  async createSubState(data: CreateVesselStateDto): Promise<VesselState> {
    const { name, description, stateCategoryId } = data;
    return this.prisma.vesselState.create({
      data: {
        name,
        description,
        stateCategory: { connect: { id: stateCategoryId } },
      },
    });
  }

  async updateSubState(
    id: number,
    data: UpdateVesselStateDto,
  ): Promise<VesselState> {
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
