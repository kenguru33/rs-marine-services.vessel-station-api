import { Expose } from 'class-transformer';

export class ResponseVesselDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  rs: number;

  @Expose()
  stationId: number;

  @Expose()
  classId: number;

  @Expose()
  stateId: number;

  @Expose()
  typeId: number;
}
