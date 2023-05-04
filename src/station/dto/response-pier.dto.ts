import { Expose } from 'class-transformer';

export class ResponsePierDto {
  @Expose()
  id: number;

  @Expose()
  length: number;

  @Expose()
  width: number;

  @Expose()
  minimumDepth: number;

  @Expose()
  typeId: number;

  @Expose()
  floating: boolean;

  @Expose()
  diesel: boolean;

  @Expose()
  petrol: boolean;

  @Expose()
  storageSpace: boolean;

  @Expose()
  coldWater: boolean;

  @Expose()
  hotWater: boolean;

  @Expose()
  stationId: number;
}
