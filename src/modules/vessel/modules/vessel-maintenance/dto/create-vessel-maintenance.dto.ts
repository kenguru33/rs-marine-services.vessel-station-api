import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class CreateVesselMaintenanceDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @Max(100)
  @Min(0)
  @IsOptional()
  progress?: number; // in percent

  @IsString()
  responsible: string; // verksted, verft, etc

  @IsNumber()
  approvedById: number; // id of inspector

  @IsDateString()
  fromDate: Date;

  @IsDateString()
  toDate: Date;

  @IsNumber()
  vesselId: number;

}