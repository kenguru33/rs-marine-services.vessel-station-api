import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateVesselClassDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;
  
  @IsString()
  @IsOptional()
  description?: string;
}
