import { ApiProperty } from '@nestjs/swagger';
import {
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPostalCode,
  IsString,
} from 'class-validator';

export class UpdateStationDto {
  @ApiProperty({ example: 'Tortuga' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  typeId?: number;

  @ApiProperty({ example: 'Jack Sparrow' })
  @IsOptional()
  @IsString()
  tilFelt?: string;

  @ApiProperty({ example: 'Twelve Daggers 12' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ example: '1234' })
  @IsOptional()
  @IsPostalCode('NO')
  postalCode?: string;

  @ApiProperty({ example: 12 })
  @IsNumber()
  @IsOptional()
  postalBox?: number;

  @ApiProperty({ example: 'Salty Cove' })
  @IsOptional()
  @IsString()
  postalLocation?: string;

  @ApiProperty({ example: 69.42 })
  @IsOptional()
  @IsLatitude()
  latitude?: number;

  @ApiProperty({ example: 12.42 })
  @IsOptional()
  @IsLongitude()
  longitude?: number;

  @ApiProperty({ example: '1234' })
  @IsString()
  @IsOptional()
  postalDelivery?: string;
}
