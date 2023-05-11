import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateVesselCommunicationEquipmentTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}