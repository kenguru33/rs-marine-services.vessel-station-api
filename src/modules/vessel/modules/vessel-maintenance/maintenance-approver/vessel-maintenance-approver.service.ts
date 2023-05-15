import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../database/prisma.service';
import { CreateVesselMaintenanceApproverDto } from './dto/create-vessel-maintenance-approver.dto';

@Injectable()
export class VesselMaintenanceApproverService {
  constructor(private prisma: PrismaService) {}

  async getVesselMaintenanceApprovers() {
    return await this.prisma.vesselMaintenanceApprover.findMany();
  }

  async getVesselMaintenanceApprover(id: number) {
    return await this.prisma.vesselMaintenanceApprover.findUnique({
      where: { id },
    });
  }

  async createVesselMaintenanceApprover(
    data: CreateVesselMaintenanceApproverDto,
  ) {
    return await this.prisma.vesselMaintenanceApprover.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        maintenance: {
          connect: data.maintenanceId ? { id: data.maintenanceId } : undefined,
        },
      },
    });
  }

  async updateVesselMaintenanceApprover(
    id: number,
    data: CreateVesselMaintenanceApproverDto,
  ) {
    return await this.prisma.vesselMaintenanceApprover.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        maintenance: {
          connect: { id: data.maintenanceId },
        },
      },
    });
  }

  async deleteVesselMaintenanceApprover(id: number) {
    return await this.prisma.vesselMaintenanceApprover.delete({
      where: { id },
    });
  }
}
