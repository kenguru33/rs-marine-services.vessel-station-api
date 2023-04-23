import { Injectable } from '@nestjs/common';
import { CreateVesselStateCategoryDto } from './dto/createVesselStateCategory.dto';
import { VesselStateCategory } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateVesselStateCategoryDto } from './dto/updateVesselStateCategory.dto';

export type VesselStateCategoryWithStates = Partial<VesselStateCategory> & {
  states?: Partial<VesselStateCategory>;
};

@Injectable()
export class VesselStateCategoryService {
  constructor(private prisma: PrismaService) {}

  async getStateCategory(id: number): Promise<VesselStateCategory> {
    return this.prisma.vesselStateCategory.findUnique({
      where: { id },
    });
  }

  async getStateCategories(): Promise<VesselStateCategory[]> {
    return this.prisma.vesselStateCategory.findMany({});
  }

  async createStateCategory(
    data: CreateVesselStateCategoryDto,
  ): Promise<VesselStateCategory> {
    const { name, description } = data;
    return this.prisma.vesselStateCategory.create({
      data: {
        name,
        description,
      },
    });
  }

  async deleteStateStateCategory(id: number): Promise<VesselStateCategory> {
    return this.prisma.vesselStateCategory.delete({
      where: {
        id,
      },
    });
  }

  async updateStateCategory(
    id: number,
    data: UpdateVesselStateCategoryDto,
  ): Promise<VesselStateCategory> {
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
    });
  }
}
