import { ApiProperty } from '@nestjs/swagger';
import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsOptional,
  IsPostalCode,
  IsString
} from 'class-validator';

export class CreateStationAccommodationDto {

  @ApiProperty({ example: 1 })
  @IsNumber()
  typeId: number;

  @ApiProperty({ example: 'Bolig for innlosering av mannskap' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'Piratveien 2' })
  @IsString()
  address: string;

  @ApiProperty({ example: 'Tortuga' })
  @IsString()
  postalLocation: string;

  @ApiProperty({ example: '1234' })
  @IsPostalCode('NO')
  postalCode: string;

  @ApiProperty({ example: 123 })
  @IsNumber()
  @IsOptional()
  postalBox?: number;

  @ApiProperty({ example: 62 })
  @IsLatitude()
  latitude: number;

  @ApiProperty({ example: 12 })
  @IsLongitude()
  longitude: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  stationId: number;
}
