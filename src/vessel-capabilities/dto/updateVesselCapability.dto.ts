import { IsDefined, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateVesselCapabilityDto {
  @IsOptional()
  @IsString()
  name?: string;
  @IsString()
  @IsOptional()
  description?: string;
}
