import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { UpdateVesselInspectorDto } from './dto/update-vessel-inspector.dto';
import { CreateVesselInspectorDto } from './dto/create-vessel-inspector.dto';

@Injectable()
export class VesselInspectorService {
  constructor(private prisma: PrismaService) {}

  async getVesselInspector(id: number) {
    return await this.prisma.vesselInspector.findUnique({
      where: { id },
    });
  }

  async getVesselInspectors() {
    return await this.prisma.vesselInspector.findMany();
  }

  async createVesselInspector(data: CreateVesselInspectorDto) {
    return await this.prisma.vesselInspector.create({
      data: {
        vessels: {
          connect: data.vesselIds
            ? data.vesselIds.map((id: number) => ({ id }))
            : [],
        },

        ...data,
      },
      include: {
        vessels: true,
      },
    });
  }

  async updateVesselInspector(id: number, data: UpdateVesselInspectorDto) {
    return await this.prisma.vesselInspector.update({
      where: { id },
      data: {
        vessels: {
          set: data.vesselIds?.map((id: number) => ({ id })),
        },
        ...data,
      },
    });
  }

  async deleteVesselInspector(id: number) {
    return await this.prisma.vesselInspector.delete({
      where: { id },
    });
  }
}
