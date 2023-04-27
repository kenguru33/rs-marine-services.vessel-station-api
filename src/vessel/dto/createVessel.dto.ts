import { Expose } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateVesselDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  rs: number;

  @IsNumber()
  vesselClassId: number;

  @IsArray()
  @IsOptional()
  capabilityIds?: number[];

  @IsNumber()
  @IsOptional()
  stationId?: number;

  @IsNumber()
  stateId: number;

  @IsNumber()
  vesselTypeId: number;
}
