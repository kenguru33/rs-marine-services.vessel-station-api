import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateVesselCrewDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsNumber()
  vesselId?: number;
}
