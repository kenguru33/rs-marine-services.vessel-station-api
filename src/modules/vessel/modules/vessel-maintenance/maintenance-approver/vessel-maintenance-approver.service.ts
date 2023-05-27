import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../database/prisma.service';
import { CreateVesselMaintenanceApproverDto } from './dto/create-vessel-maintenance-approver.dto';
import { QueryVesselMaintenanceApproverIncludeDto } from './dto/query-vessel-maintenance-approver-include.dto';
import { QueryVesselMaintenanceApproverFilterDto } from './dto/query-vessel-maintenace-approver-filter.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class VesselMaintenanceApproverService {
  constructor(private prisma: PrismaService) {}

  async getVesselMaintenanceApprovers(
    queryInclude: QueryVesselMaintenanceApproverIncludeDto,
    queryFilter: QueryVesselMaintenanceApproverFilterDto,
  ) {
    const vesselMaintenanceApproverInclude =
      await this.prisma.parseInclude<Prisma.VesselMaintenanceApproverInclude>(
        queryInclude.include,
      );
    return await this.prisma.vesselMaintenanceApprover.findMany({
      include: vesselMaintenanceApproverInclude,
      where: {
        name: {
          contains: queryFilter.name,
        },
      },
    });
  }

  async getVesselMaintenanceApprover(
    id: number,
    queryInclude: QueryVesselMaintenanceApproverIncludeDto,
  ) {
    const vesselMaintenanceApproverInclude =
      await this.prisma.parseInclude<Prisma.VesselMaintenanceApproverInclude>(
        queryInclude.include,
      );
    return await this.prisma.vesselMaintenanceApprover.findUnique({
      where: { id },
      include: vesselMaintenanceApproverInclude,
    });
  }

  async createVesselMaintenanceApprover(
    data: CreateVesselMaintenanceApproverDto,
    queryInclude: QueryVesselMaintenanceApproverIncludeDto,
  ) {
    const vesselMaintenanceApproverInclude =
      await this.prisma.parseInclude<Prisma.VesselMaintenanceApproverInclude>(
        queryInclude.include,
      );
    return await this.prisma.vesselMaintenanceApprover.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
      include: vesselMaintenanceApproverInclude,
    });
  }

  async updateVesselMaintenanceApprover(
    id: number,
    data: CreateVesselMaintenanceApproverDto,
    queryInclude: QueryVesselMaintenanceApproverIncludeDto,
  ) {
    const vesselMaintenanceApproverInclude =
      await this.prisma.parseInclude<Prisma.VesselMaintenanceApproverInclude>(
        queryInclude.include,
      );
    return await this.prisma.vesselMaintenanceApprover.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
      include: vesselMaintenanceApproverInclude,
    });
  }

  async deleteVesselMaintenanceApprover(id: number) {
    return await this.prisma.vesselMaintenanceApprover.delete({
      where: { id },
    });
  }
}
