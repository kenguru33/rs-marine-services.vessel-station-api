import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';

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

  async createVesselInspector(data: any) {
    return await this.prisma.vesselInspector.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        fromDate: data.fromDate,
        toDate: data.toDate,
        vessels: {
          connect: {
            id: data.vesselId,
            
          }
        }        
      }
    });
  }

  async updateVesselInspector(id: number, data: any) {
    return await this.prisma.vesselInspector.update({
      where: { id },
      data,
    });
  }

  async deleteVesselInspector(id: number) {
    return await this.prisma.vesselInspector.delete({
      where: { id },
    });
  }
}
