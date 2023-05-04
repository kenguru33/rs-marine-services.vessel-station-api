import { Expose, Transform } from 'class-transformer';
import { VesselWithRelation } from '../../vessel.service';
import { Vessel } from '@prisma/client';

export class VesselResponseDto {
  @Expose()
  id: number;
  @Expose()
  name: string;
  @Expose()
  rs: number;
  @Expose()
  station?: {
    id: number;
    name: string;
  };
  @Expose()
  class?: {
    id: number;
    name: string;
  };
  @Expose()
  state: {
    id: number;
    name: string;
    description: string;
    stateCategory: {
      id: number;
      name: string;
      description: string;
    };
  };
  @Expose()
  capabilities: {
    id: number;
    name: string;
  }[];
}
