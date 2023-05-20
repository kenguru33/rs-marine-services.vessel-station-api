import { ApiProperty } from '@nestjs/swagger';
import { IsMmsi } from '@redningsselskapet/class-validator-ais';
import { Expose, Type } from 'class-transformer';
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
  @ApiProperty({description: 'Name of the vessel',required: true, example: 'Anker'})
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({description: 'rs number of the vessel', required: true, example: 336})
  @IsNumber()
  rs: number;

  @ApiProperty({description: 'MMSI number of the vessel', required: true, example: 548738457})
  @IsMmsi()
  mmsi: number;

  @ApiProperty({description: 'Class ID of the vessel', required: true, example: 1})
  @IsNumber()
  classId: number;

  @ApiProperty({description: 'Capability IDs of the vessel', required: false, example: [1,2,3]})
  @IsArray()
  @Type(() => Number)
  @IsOptional()
  capabilityIds?: number[];

  @ApiProperty({description: 'Station ID of the vessel', required: false, example: 1})
  @IsNumber()
  @IsOptional()
  stationId?: number;

  @ApiProperty({description: 'State ID of the vessel', required: true, example: 1})
  @IsNumber()
  stateId: number;

  @ApiProperty({description: 'Type ID of the vessel', required: true, example: 1})
  @IsNumber()
  typeId: number;

  @ApiProperty({description: 'Inspector IDs of the vessel', required: false, example: [1]})
  @IsArray()
  @IsOptional()
  inspectorIds?: number[];

  // // aner ikke hva dette er

  // @IsNumber()
  // @IsOptional()
  // fleetCapacity?: number;

  // @IsNumber()
  // @IsOptional()
  // maxPax?: number;


  // // BuildInfo

  // @IsInt()
  // @Min(1800)
  // @Max(2100)
  // @IsOptional()
  // buildYear?: number;

  // @IsDateString()
  // @IsOptional()
  // inServiceFrom?: string;

  // @IsDateString()
  // @IsOptional()
  // inServiceTo?: string;

  // @IsString()
  // @IsOptional()
  // builder?: string;

  // @IsString()
  // @IsOptional()
  // salesOrganization?: string;

  // @IsString()
  // @IsOptional()
  // buildMaterial?: string;

  // @IsString()
  // @IsOptional()
  // financedBy?: string;

  // @IsString()
  // @IsOptional()
  // dnvClass?: string;

  // // Dimensions

  // @IsNumber()
  // @IsOptional()
  // maxSpeed?: number;

  // @IsNumber()
  // @IsOptional()
  // cruisingSpeed?: number;

  // @IsNumber()
  // @IsOptional()
  // range?: number;

  // @IsNumber()
  // @IsOptional()
  // length?: number;

  // @IsNumber()
  // @IsOptional()
  // beam?: number;

  // @IsNumber()
  // @IsOptional()
  // bunkersOil?: number;

  // @IsNumber()
  // @IsOptional()
  // balastTank?: number;

  // @IsNumber()
  // @IsOptional()
  // freshWaterTank?: number;

  // @IsNumber()
  // @IsOptional()
  // bollardPull?: number;

  // @IsNumber()
  // @IsOptional()
  // towingPower: number;

  // @IsNumber()
  // @IsOptional()
  // netTonnage?: number;

  // @IsNumber()
  // @IsOptional()
  // grossTonnage?: number;

  
}
