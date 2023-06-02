import { ApiProperty } from '@nestjs/swagger';
import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsOptional,
  IsPostalCode,
  IsString,
} from 'class-validator';

export class UpdateStationAccommodationDto {
  @ApiProperty({ example: 'Leilighet' })
  @IsNumber()
  @IsOptional()
  typeId?: number;

  @ApiProperty({ example: 'Leilighet for mannskap' })
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
