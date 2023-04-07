import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateVesselClassDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;
  @IsNumber()
  @IsOptional()
  range?: number; // in nautical miles
  @IsNumber()
  @IsOptional()
  speed?: number; // in knots
}
