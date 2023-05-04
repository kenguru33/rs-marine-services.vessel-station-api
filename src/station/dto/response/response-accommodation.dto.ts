import { Expose, Type } from 'class-transformer';
import { ResponseAccommodationTypeDto } from './response-accommodation-type.dto';

export class ResponseAccommodationDto {
  @Expose()
  id: number;

  typeId: number;

  @Type(() => ResponseAccommodationTypeDto)
  @Expose()
  type: ResponseAccommodationTypeDto;

  @Expose()
  description?: string;

  @Expose()
  address: string;

  @Expose()
  postalCode: string;

  @Expose()
  postalLocation: string;

  @Expose()
  postalBox?: number;

  @Expose()
  latitude: number;

  @Expose()
  longitude: number;

  stationId: number;
}
