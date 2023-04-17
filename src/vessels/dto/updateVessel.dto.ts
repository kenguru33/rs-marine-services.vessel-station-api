import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, isValidationOptions } from "class-validator";

export class UpdateVesselDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  rs: number;

  @IsNumber()
  @IsOptional()
  vesselClassId: number;

  @IsArray()
  @IsOptional()
  capabilityIds?: number[];

  @IsNumber()
  @IsOptional()
  stationId?: number;

  @IsNumber()
  subStateId: number;
}