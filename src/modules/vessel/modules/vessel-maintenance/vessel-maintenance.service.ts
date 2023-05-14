import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { UpdateVesselMaintenanceDto } from './dto/update-vessel-maintenance.dto';
import { CreateVesselMaintenanceDto } from './dto/create-vessel-maintenance.dto';

@Injectable()
export class VesselMaintenanceService {
  constructor(private prisma: PrismaService) {}

  async getVesselMaintenance(id: number) {
    return await this.prisma.vesselMaintenance.findUniqueOrThrow({
      where: { id },
      include: {
        approvedBy: true,
        Vessel: true,
      },
    });
  }

  async getVesselMaintenances() {
    return await this.prisma.vesselMaintenance.findMany({
      include: {
        approvedBy: true,
        Vessel: true,
      },
    });
  }

  async createVesselMaintenance(data: CreateVesselMaintenanceDto) {
    return await this.prisma.vesselMaintenance.create({
      data: {
        description: data.description,
        approvedBy: { connect: { id: data.approvedByInspectorId } },
        progress: data.progress,
        responsible: data.responsible,
        fromDate: data.fromDate,
        toDate: data.toDate,
        Vessel: { connect: { id: data.vesselId } },
      },
      include: {
        approvedBy: true,
        Vessel: true,
      },
    });
  }

  async updateVesselMaintenance(id: number, data: UpdateVesselMaintenanceDto) {
    return await this.prisma.vesselMaintenance.update({
      where: { id },
      data: {
        description: data.description,
        approvedBy: { connect: { id: data.approvedByInspectorId } },
        progress: data.progress,
        responsible: data.responsible,
        fromDate: data.fromDate,
        toDate: data.toDate,
        Vessel: { connect: { id: data.vesselId } },
      },
    });
  }

  async deleteVesselMaintenance(id: number) {
    return await this.prisma.vesselMaintenance.delete({
      where: { id },
    });
  }
}
