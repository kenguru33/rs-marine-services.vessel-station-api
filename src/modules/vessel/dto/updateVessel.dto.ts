import { ApiProperty } from "@nestjs/swagger";
import { IsMmsi } from "@redningsselskapet/class-validator-ais";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateVesselDto {
  @ApiProperty({name: 'name', description: 'Name of the vessel',required: false, example: 'Anker'})
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @ApiProperty({name: 'mmsi', description: 'MMSI number of the vessel', required: false, example: 548738457})
  @IsMmsi()
  mmsi?: number;

  @ApiProperty({name: 'imo', description: 'IMO number of the vessel', required: false, example: 333})
  @IsNumber()
  @IsOptional()
  rs?: number;

  @ApiProperty({name: 'classId', description: 'Class ID of the vessel', required: false, example: 1})
  @IsNumber()
  @IsOptional()
  classId?: number;

  @ApiProperty({name: 'capabilityIds', description: 'Capability IDs of the vessel', required: false, example: [1,2,3]})
  @IsArray()
  @IsOptional()
  capabilityIds?: number[];

  @ApiProperty({name: 'stationId', description: 'Station ID of the vessel', required: false, example: 1})
  @IsNumber()
  @IsOptional()
  stationId?: number;

  @ApiProperty({name: 'stateId', description: 'State ID of the vessel', required: false, example: 1})
  @IsNumber()
  @IsOptional()
  stateId?: number;

  @ApiProperty({name: 'typeId', description: 'Type ID of the vessel', required: false, example: 1})
  @IsNumber()
  @IsOptional()
  typeId?: number;

  @ApiProperty({name: 'inspectorIds', description: 'Inspector IDs of the vessel', required: false, example: [1]})
  @IsNumber()
  @IsOptional()
  inspectorIds?: number[];

}