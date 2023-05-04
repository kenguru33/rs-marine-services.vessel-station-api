import { IsBoolean, IsNumber } from 'class-validator';

export class CreateStationPierDto {
  @IsNumber()
  length: number;

  @IsNumber()
  width: number;

  @IsNumber()
  minimumDepth: number;

  @IsNumber()
  typeId: number;

  @IsBoolean()
  floating: boolean;

  @IsBoolean()
  diesel: boolean;

  @IsBoolean()
  petrol: boolean;

  @IsBoolean()
  storageSpace: boolean;

  @IsBoolean()
  coldWater: boolean;

  @IsBoolean()
  hotWater: boolean;

  @IsNumber()
  stationId: number;
}
