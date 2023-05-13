import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class UpdateStationPierDto {
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
}