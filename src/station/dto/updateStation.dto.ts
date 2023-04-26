import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsOptional, IsPostalCode, IsString } from 'class-validator';

export class UpdateStationDto {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsNumber()
  @IsOptional()
  typeId?: number;

  @IsOptional()
  @IsString()
  tilFelt?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsPostalCode('NO')
  postalCode?: string;

  @IsNumber()
  @IsOptional()
  postalBox?: number;

  @IsOptional()
  @IsString()
  postalLocation?: string;

  @IsOptional()
  @IsLatitude()
  latitude?: number;

  @IsOptional()
  @IsLongitude()
  longitude?: number;

  @IsString()
  @IsOptional() 
  postalDeleiver?: string;
}
