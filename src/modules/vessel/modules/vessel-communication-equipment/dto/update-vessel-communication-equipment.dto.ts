import { IsNumber } from 'class-validator';

export class UpdateVesselCommunicationEquipmentDto {
  @IsNumber()
  typeId: number;

  @IsNumber()
  numberOfUnits: number;
}
