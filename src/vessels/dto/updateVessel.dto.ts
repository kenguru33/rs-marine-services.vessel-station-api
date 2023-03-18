import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, isValidationOptions } from "class-validator";

export class UpdateVesselDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  rs?: number;
  inUse?: boolean;

  @IsNumber()
  @IsNotEmpty()
  vesselClassId: number;

  @IsArray()
  @IsOptional()
  capabilityIds?: number[];
}