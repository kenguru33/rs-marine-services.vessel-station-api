import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, isValidationOptions } from "class-validator";

export class UpdateVesselDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  rs?: number;

  @IsNumber()
  @IsOptional()
  classId?: number;

  @IsArray()
  @IsOptional()
  capabilityIds?: number[];

  @IsNumber()
  @IsOptional()
  stationId?: number;

  @IsNumber()
  @IsOptional()
  stateId?: number;

  @IsNumber()
  @IsOptional()
  typeId?: number;
}