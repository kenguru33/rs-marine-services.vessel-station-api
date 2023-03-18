import { Injectable } from '@nestjs/common';
import { Prisma, State } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StatesRepositoryService {
  constructor(private prisma: PrismaService) {}
  async state(stateWhereUniqueInput: Prisma.StateWhereUniqueInput) {
    return this.prisma.state.findUnique({
      where: stateWhereUniqueInput,
    });
  }
  async states(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.StateWhereUniqueInput;
    where?: Prisma.StateWhereInput;
    orderBy?: Prisma.StateOrderByWithRelationInput;
  }): Promise<State[]> {
    return this.prisma.state.findMany(params);
  }

  async createState(data: Prisma.StateCreateInput) {
    return this.prisma.state.create({
      data,
    });
  }

  async deleteState(params: { id: number }): Promise<State> {
    const { id } = params;
    return this.prisma.state.delete({
      where: {
        id,
      },
    });
  }

  async updateState(params: {
    id: number;
    data: Prisma.StateUpdateInput;
  }): Promise<State> {
    const { id, data } = params;
    return this.prisma.state.update({
      where: {
        id,
      },
      data,
    });
  }
}
