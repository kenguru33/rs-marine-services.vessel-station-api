import { IsOptional, IsString } from 'class-validator';

export class UpdateVesselTypeDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  prefix?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
