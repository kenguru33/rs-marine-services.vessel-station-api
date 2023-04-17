import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateVesselSubStateDto } from './dto/createVesselSubState.dto';
import { UpdateVesselSubStateDto } from './dto/updateVesselSubState.dto';

@Injectable()
export class VesselSubStatesService {
  constructor(private prisma: PrismaService) {}

  async subState(id: number) {
    return this.prisma.vesselSubState.findUnique({
      where: { id },
      include: { parentState: true },
    });
  }

  async createSubState(data: CreateVesselSubStateDto) {
    const { name, description, parentStateId, legacyStateId } = data;
    return this.prisma.vesselSubState.create({
      data: {
        name,
        description,
        parentState: { connect: { id: parentStateId } },
      },
      include: {
        parentState: true,
      },
    });
  }

  async updateSubState(id: number, data: UpdateVesselSubStateDto) {
    const { description, inUse, legacyStateId, name, parentStateId } = data;
    return this.prisma.vesselSubState.update({
      where: {
        id,
      },
      data: {
        name: name || undefined,
        description: description || undefined,
        inUse: inUse || undefined,
        legacyStateId: legacyStateId || undefined,
        parentState: { connect: { id: parentStateId } },
      },
    });
  }

  async deleteSubState(id: number) {
    return this.prisma.vesselSubState.delete({
      where: {
        id,
      },
    });
  }

}
