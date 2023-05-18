import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../database/prisma.service';
import { CreateVesselMaintenanceApproverDto } from './dto/create-vessel-maintenance-approver.dto';

@Injectable()
export class VesselMaintenanceApproverService {
  constructor(private prisma: PrismaService) {}

  async getVesselMaintenanceApprovers() {
    return await this.prisma.vesselMaintenanceApprover.findMany({
      include: {
        maintenances: true,
      },
    });
  }

  async getVesselMaintenanceApprover(id: number) {
    return await this.prisma.vesselMaintenanceApprover.findUnique({
      where: { id },
      include: {
        maintenances: true,
      },
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
      },
      include: {
        maintenances: true,
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
      },
      include: {
        maintenances: true,
      },
    });
  }

  async deleteVesselMaintenanceApprover(id: number) {
    return await this.prisma.vesselMaintenanceApprover.delete({
      where: { id },
    });
  }
}
