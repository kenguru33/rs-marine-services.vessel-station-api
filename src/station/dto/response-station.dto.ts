import { Expose, Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { ResponsePierDto } from '../station-pier/dto/response-pier.dto';
import { ResponseAccommodationDto } from '../station-accommodation/dto/response-accommodation.dto';
import { ResponseStationTypeDto } from '../station-type/dto/response-station-type.dto';
import { ResponseVesselDto } from '../../vessel/dto/response-vessel.dto';

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
