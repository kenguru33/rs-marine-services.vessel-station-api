import { Expose } from 'class-transformer';
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
  @IsNumber()
  latitude: number;

  @Expose()
  longitude: number;

  @Expose()
  pier?: ResponsePierDto;

  @Expose()
  accommodation?: ResponseAccommodationDto;

  @Expose()
  type: ResponseStationTypeDto;

  @Expose()
  vessels?: ResponseVesselDto[];
}
