import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { UpdateVesselMaintenanceDto } from './dto/update-vessel-maintenance.dto';
import { CreateVesselMaintenanceDto } from './dto/create-vessel-maintenance.dto';
import { QueryVesselMaintenanceIncludeDto } from './dto/query-vessel-maintenance-include.dto';
import { Prisma } from '@prisma/client';
import { query } from 'express';
import { QueryVesselMaintenanceFilterDto } from './dto/query-vessel-maintenance-filter.dto';

@Injectable()
export class VesselMaintenanceService {
  constructor(private prisma: PrismaService) {}

  async getVesselMaintenance(
    id: number,
    query: QueryVesselMaintenanceIncludeDto,
  ) {
    const vesselMaintenanceInclude =
      await this.prisma.parseInclude<Prisma.VesselMaintenanceInclude>(
        query.include,
      );
    return await this.prisma.vesselMaintenance.findUniqueOrThrow({
      where: { id },
      include: vesselMaintenanceInclude,
    });
  }

  async getVesselMaintenances(
    queryInclude: QueryVesselMaintenanceIncludeDto,
    queryFilter: QueryVesselMaintenanceFilterDto,
  ) {
    const vesselMaintenanceInclude =
      await this.prisma.parseInclude<Prisma.VesselMaintenanceInclude>(
        queryInclude.include,
      );

    return await this.prisma.vesselMaintenance.findMany({
      include: vesselMaintenanceInclude,
      where: {
        fromDate: { gte: queryFilter.after },
        toDate: { lte: queryFilter.before },
        vessel: { name: { contains: queryFilter.vessel } },
      },
    });
  }

  async createVesselMaintenance(
    data: CreateVesselMaintenanceDto,
    query: QueryVesselMaintenanceIncludeDto,
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
    query: QueryVesselMaintenanceIncludeDto,
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
