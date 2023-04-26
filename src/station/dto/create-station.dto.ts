import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsOptional, IsPostalCode, IsString } from "class-validator";

export class CreateStationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  typeId: number;

  @IsOptional()
  @IsString()
  tilFelt?: string;

  @IsString()
  address: string;

  @IsPostalCode('NO')
  postalCode: string;

  @IsNumber()
  @IsOptional()
  postalBox?: number;

  @IsString()
  postalLocation: string;

  @IsLatitude()
  latitude: number;

  @IsLongitude()
  longitude: number;

  @IsString()
  @IsOptional() 
  postalDeleiver?: string;
}
