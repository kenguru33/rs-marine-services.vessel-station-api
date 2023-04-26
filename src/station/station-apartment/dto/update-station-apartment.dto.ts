import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsOptional,
  IsPostalCode,
  IsString,
} from 'class-validator';

export class UpdateStationApartmentDto {
  
  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  postalLocation?: string;

  @IsOptional()
  @IsPostalCode('NO')
  postalCode?: string;

  @IsNumber()
  @IsOptional()
  postalBox?: number;

  @IsLatitude()
  @IsOptional()
  latitude?: number;

  @IsLongitude()
  @IsOptional()
  longitude?: number;

  @IsNumber()
  @IsOptional()
  stationId?: number;

}
