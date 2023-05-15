import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { UpdateVesselMaintenanceDto } from './dto/update-vessel-maintenance.dto';
import { CreateVesselMaintenanceDto } from './dto/create-vessel-maintenance.dto';
import { QueryVesselMaintenancepDto } from './dto/query-vessel-maintenance.dto';
import { Prisma } from '@prisma/client';
import { query } from 'express';

@Injectable()
export class VesselMaintenanceService {
  constructor(private prisma: PrismaService) {}

  async getVesselMaintenance(id: number, query: QueryVesselMaintenancepDto) {
    const vesselMaintenanceInclude =
      await this.prisma.parseInclude<Prisma.VesselMaintenanceInclude>(
        query.include,
      );
    return await this.prisma.vesselMaintenance.findUniqueOrThrow({
      where: { id },
      include: vesselMaintenanceInclude,
    });
  }

  async getVesselMaintenances(query: QueryVesselMaintenancepDto) {
    const { include, ...where } = query;

    const vesselMaintenanceInclude =
      await this.prisma.parseInclude<Prisma.VesselMaintenanceInclude>(include);

    return await this.prisma.vesselMaintenance.findMany({
      include: vesselMaintenanceInclude,
      where: {
        fromDate: { gte: where.after },
        toDate: { lte: where.before },
        vessel: { name: { contains: where.vessel } },
      },
    });
  }

  async createVesselMaintenance(
    data: CreateVesselMaintenanceDto,
    query: QueryVesselMaintenancepDto,
  ) {
    const vesselMaintenanceInclude =
      await this.prisma.parseInclude<Prisma.VesselMaintenanceInclude>(
        query.include,
      );
    return await this.prisma.vesselMaintenance.create({
      data: {
        description: data.description,
        approvedBy: { connect: { id: data.approvedById } },
        progress: data.progress,
        responsible: data.responsible,
        fromDate: data.fromDate,
        toDate: data.toDate,
        vessel: { connect: { id: data.vesselId } },
      },
      include: vesselMaintenanceInclude,
    });
  }

  async updateVesselMaintenance(
    id: number,
    data: UpdateVesselMaintenanceDto,
    query: QueryVesselMaintenancepDto,
  ) {
    const vesselMaintenanceInclude =
      await this.prisma.parseInclude<Prisma.VesselMaintenanceInclude>(
        query.include,
      );
    return await this.prisma.vesselMaintenance.update({
      where: { id },
      data: {
        description: data.description,
        approvedBy: { connect: { id: data.approvedByInspectorId } },
        progress: data.progress,
        responsible: data.responsible,
        fromDate: data.fromDate,
        toDate: data.toDate,
        vessel: { connect: { id: data.vesselId } },
      },
      include: vesselMaintenanceInclude,
    });
  }

  async deleteVesselMaintenance(id: number) {
    return await this.prisma.vesselMaintenance.delete({
      where: { id },
    });
  }
}
