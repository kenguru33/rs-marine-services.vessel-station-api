import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVesselCrewDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsOptional()
  vesselId?: number;
}
