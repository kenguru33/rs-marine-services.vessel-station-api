import { IsDate, IsDateString, IsInt, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class CreateVesselBuildInfoDto {

  @IsNumber()
  vesselId: number;

  @IsInt()
  @Min(1800)
  @Max(2100)
  @IsOptional()
  buildYear: number;

  @IsDateString()
  @IsOptional()
  inServiceFrom: string;

  @IsDateString()
  @IsOptional()
  inServiceTo: string;

  @IsString()
  @IsOptional()
  builder: string;

  @IsString()
  @IsOptional()
  salesOrganization: string;

  @IsString()
  @IsOptional()
  buildMaterial: string;

  @IsString()
  @IsOptional()
  financedBy: string;

  @IsString()
  @IsOptional()
  dnvClass: string;
}
