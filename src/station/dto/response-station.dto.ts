import { Expose, Type } from 'class-transformer';
import {
  IsNumber,
} from 'class-validator';
import { ResponsePierDto } from './response-pier.dto';
import { ResponseAccommodationDto } from './response-accommodation.dto';
import { ResponseStationTypeDto } from './response-station-type.dto';
import { ResponseVesselDto } from './response-vessel.dto';

export class ResponseStationDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  tilFelt?: string;

  @Expose()
  address: string;

  @Expose()
  postalCode: string;

  @Expose()
  postalLocation: string;

  @Expose()
  postalBox?: number;

  @Expose()
  postalDelivery?: string;

  @Expose()
  latitude: number;

  @Expose()
  longitude: number;

  @Type(() => ResponsePierDto)
  @Expose()
  pier?: ResponsePierDto;

  @Expose()
  @Type(() => ResponseAccommodationDto)
  accommodation?: ResponseAccommodationDto;

  @Type(() => ResponseStationTypeDto)
  @Expose()
  type: ResponseStationTypeDto;

  @Expose()
  @Type(() => ResponseVesselDto)
  vessels?: ResponseVesselDto[];
}
