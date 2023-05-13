import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateVesselCommunicationEquipmentTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}