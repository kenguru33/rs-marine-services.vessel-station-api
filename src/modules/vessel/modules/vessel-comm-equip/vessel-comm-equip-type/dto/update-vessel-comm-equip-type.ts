import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateVesselCommEquipTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}
