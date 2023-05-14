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
