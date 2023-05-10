import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';

@Injectable()
export class VesselBuildInfoService {
  constructor(private prisma: PrismaService) {}

  async getVesselBuildInfos() {
    return this.prisma.vesselBuildInfo.findMany();
  }
}
