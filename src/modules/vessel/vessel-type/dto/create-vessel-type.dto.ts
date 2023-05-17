import { IsOptional, IsString } from 'class-validator';

export class CreateVesselTypeDto {
  @IsString()
  name: string;

  @IsString()
  prefix: string;

  @IsString()
  @IsOptional()
  description?: string;
}
