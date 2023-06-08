import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class UpdateStationPierDto {
  @ApiProperty({ example: 10 })
  @IsOptional()
  @IsNumber()
  length?: number;

  @IsOptional()
  @IsNumber()
  width?: number;

  @IsOptional()
  @IsNumber()
  minimumDepth?: number;

  @IsOptional()
  @IsNumber()
  typeId?: number;

  @IsOptional()
  @IsBoolean()
  floating?: boolean;

  @ApiProperty({ example: false })
  @IsOptional()
  @IsBoolean()
  diesel?: boolean;

  @IsOptional()
  @IsBoolean()
  petrol?: boolean;

  @IsOptional()
  @IsBoolean()
  storageSpace?: boolean;

  @IsOptional()
  @IsBoolean()
  coldWater?: boolean;

  @IsOptional()
  @IsBoolean()
  hotWater?: boolean;

  @IsOptional()
  @IsNumber()
  stationId?: number;

  @ApiProperty({ example: 1 })
  @IsArray()
  @Type(() => Number)
  electricityTypeIds: number[];
}
