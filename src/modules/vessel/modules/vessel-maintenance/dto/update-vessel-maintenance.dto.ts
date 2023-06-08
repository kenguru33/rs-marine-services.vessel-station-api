import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';


export class UpdateVesselMaintenanceDto {

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: '50' })
  @Max(100)
  @Min(0)
  @IsOptional()
  progress?: number; // in percent

  @IsString()
  @IsOptional()
  responsible?: string; // verksted, verft, etc

  @IsNumber()
  @IsOptional()
  approvedByInspectorId: number; // id of inspector

  @IsDateString()
  @IsOptional()
  fromDate?: Date;

  @IsDateString()
  @IsOptional()
  toDate?: Date;

  @IsNumber()
  vesselId: number;
}
