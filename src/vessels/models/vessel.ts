import { Vessel as VesselPrismaModel } from '@prisma/client';
export class Vessel implements VesselPrismaModel {
  id: number;
  name: string;
  rs: number;
  stationId: number;
  classId: number;
  subStateId: number;
  station: {
    id: number;
    name: string;
  };
  class: {
    id: number;
    name: string;
  };
  subState: {
    id: number;
    name: string;
    parentStateId: number;
    parentState: {
      id: number;
      name: string;
    };
  };
  capabilities: {
    id: number;
    name: string;
  }[];
}