import { Expose, Transform } from 'class-transformer';
import { VesselWithRelation } from '../vessel.service';
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
  @Transform(({ obj }: { obj: Vessel }) => {
    console.log('empty interceptor')
    return obj
  })
  state: {
    id: number;
    name: string;
    subState: {
      id: number;
      name: string;
    };
  };
  @Expose()
  capabilities: {
    id: number;
    name: string;
  }[];
}
