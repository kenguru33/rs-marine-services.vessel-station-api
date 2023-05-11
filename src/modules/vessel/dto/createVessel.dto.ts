import { IsMmsi } from '@redningsselskapet/class-validator-ais';
import { Expose } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateVesselDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  rs: number;

  @IsMmsi()
  mmsi: number;

  @IsNumber()
  classId: number;

  @IsArray()
  @IsOptional()
  capabilityIds?: number[];

  @IsNumber()
  @IsOptional()
  stationId?: number;

  @IsNumber()
  stateId: number;

  @IsNumber()
  typeId: number;

  @IsNumber()
  @IsOptional()
  fleetCapacity?: number;

  @IsNumber()
  @IsOptional()
  maxPax?: number;

  // BuildInfo

  @IsInt()
  @Min(1800)
  @Max(2100)
  @IsOptional()
  buildYear?: number;

  @IsDateString()
  @IsOptional()
  inServiceFrom?: string;

  @IsDateString()
  @IsOptional()
  inServiceTo?: string;

  @IsString()
  @IsOptional()
  builder?: string;

  @IsString()
  @IsOptional()
  salesOrganization?: string;

  @IsString()
  @IsOptional()
  buildMaterial?: string;

  @IsString()
  @IsOptional()
  financedBy?: string;

  @IsString()
  @IsOptional()
  dnvClass?: string;

  // Dimensions

  @IsNumber()
  @IsOptional()
  maxSpeed?: number;

  @IsNumber()
  @IsOptional()
  cruisingSpeed?: number;

  @IsNumber()
  @IsOptional()
  range?: number;

  @IsNumber()
  @IsOptional()
  length?: number;

  @IsNumber()
  @IsOptional()
  beam?: number;

  @IsNumber()
  @IsOptional()
  bunkersOil?: number;

  @IsNumber()
  @IsOptional()
  balastTank?: number;

  @IsNumber()
  @IsOptional()
  freshWaterTank?: number;

  @IsNumber()
  @IsOptional()
  bollardPull?: number;

  @IsNumber()
  @IsOptional()
  towingPower: number;

  @IsNumber()
  @IsOptional()
  netTonnage?: number;

  @IsNumber()
  @IsOptional()
  grossTonnage?: number;

  
}
