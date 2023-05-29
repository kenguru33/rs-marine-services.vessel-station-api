import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateVesselStateDto {
  @ApiProperty({ example: 'På verksted' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Fartøy er under reperasjon' })
  @Optional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  inUse?: boolean;

  @ApiProperty({ example: 3 })
  @IsNumber()
  stateCategoryId: number;
}
