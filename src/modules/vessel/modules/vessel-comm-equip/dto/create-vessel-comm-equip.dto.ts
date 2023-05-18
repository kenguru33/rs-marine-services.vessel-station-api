import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVesselCommEquipDto {
  @IsNumber()
  vesselId: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @IsNumber()
  typeId: number;

  @IsNumber()
  numberOfUnits: number;
}
