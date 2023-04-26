import { Expose } from "class-transformer";
import { IsLatitude, IsLocale, IsLongitude, IsNumber, IsOptional, IsPostalCode, IsString, isLongitude } from "class-validator";

export class CreateStationApartmentDto {
  
  @Expose()
  @IsOptional()
  @IsString()
  description?: string;

  @Expose()
  @IsString()
  address: string;

  @Expose()
  @IsString()
  postalLocation: string;
  
  @Expose()
  @IsPostalCode('NO')
  postalCode: string;

  @Expose()
  @IsNumber()
  @IsOptional()
  postalBox?: number;

  @Expose()
  @IsLatitude()
  latitude: number;

  @Expose()
  @IsLongitude()
  longitude: number;

  @Expose()
  @IsNumber()
  stationId: number;
}