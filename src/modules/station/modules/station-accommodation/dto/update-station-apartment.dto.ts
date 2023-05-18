import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsOptional,
  IsPostalCode,
  IsString,
} from 'class-validator';

export class UpdateStationAccommodationDto {
  @IsNumber()
  @IsOptional()
  typeId?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  postalLocation?: string;

  @IsOptional()
  @IsPostalCode('NO')
  postalCode?: string;

  @IsOptional()
  @IsNumber()
  postalBox?: number;

  @IsOptional()
  @IsLatitude()
  latitude?: number;

  @IsOptional()
  @IsLongitude()
  longitude?: number;

  @IsOptional()
  @IsNumber()
  stationId?: number;
}
