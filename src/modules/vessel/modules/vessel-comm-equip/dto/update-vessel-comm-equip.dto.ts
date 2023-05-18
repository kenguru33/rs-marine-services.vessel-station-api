import { IsNumber } from 'class-validator';

export class UpdateVesselCommEquipDto {
  @IsNumber()
  typeId: number;

  @IsNumber()
  numberOfUnits: number;
}
