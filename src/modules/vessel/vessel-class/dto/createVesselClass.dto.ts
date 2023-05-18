import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateVesselClassDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}