import { Expose } from 'class-transformer';
import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsOptional,
  IsPostalCode,
  IsString,
  isLongitude,
} from 'class-validator';

export class CreateStationAccommodationDto {

  @IsNumber()
  typeId: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  address: string;

  @IsString()
  postalLocation: string;

  @IsPostalCode('NO')
  postalCode: string;

  @IsNumber()
  @IsOptional()
  postalBox?: number;

  @IsLatitude()
  latitude: number;

  @IsLongitude()
  longitude: number;

  @IsNumber()
  stationId: number;
}
