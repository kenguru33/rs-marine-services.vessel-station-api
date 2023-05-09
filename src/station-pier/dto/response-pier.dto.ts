import { Expose, Type } from 'class-transformer';
import { ResponsePierTypeDto } from '../station-pier-type/dto/response-pier-type.dto';

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

  @Type(() => ResponsePierTypeDto)
  @Expose()
  type: ResponsePierTypeDto;

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
