import { Expose, Type } from 'class-transformer';
import { ResponseStationPierTypeDto } from '../station-pier-type/dto/response-pier-type.dto';

export class ResponsePierDto {
  @Expose()
  id: number;

  @Expose()
  length: number;

  @Expose()
  width: number;

  @Expose()
  minimumDepth: number;

  typeId: number;

  @Type(() => ResponseStationPierTypeDto)
  @Expose()
  type: ResponseStationPierTypeDto;

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

  stationId: number;
}
