import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../database/prisma.service";

@Injectable()
export class VesselEngineService {
  constructor(private prisma: PrismaService) {}
}