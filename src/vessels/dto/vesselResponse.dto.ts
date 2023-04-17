import { Expose, Transform } from 'class-transformer';

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
  @Transform(({ obj }) => {
    const state = {
      id: obj.subState.parentState.id,
      name: obj.subState.parentState.name,
      subState: { id: obj.subState.id, name: obj.subState.name },
    };
    return state;
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
