import { ApiProperty } from "@nestjs/swagger";
import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsOptional, IsPostalCode, IsString } from "class-validator";

export class CreateStationDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  typeId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  tilFelt?: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsPostalCode('NO')
  postalCode: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  postalBox?: number;

  @ApiProperty()
  @IsString()
  postalLocation: string;

  @ApiProperty()
  @IsLatitude()
  latitude: number;

  @ApiProperty()
  @IsLongitude()
  longitude: number;

  @ApiProperty()
  @IsString()
  @IsOptional() 
  postalDeleiver?: string;
}
