import { ApiProperty } from '@nestjs/swagger';
import { IsMmsi } from '@redningsselskapet/class-validator-ais';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateVesselDto {
  @ApiProperty({
    description: 'Vessel name',
    required: true,
    example: 'Bernt Anker',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Vessel prefix', required: true, example: '225' })
  @IsNumber()
  rs: number;

  @ApiProperty({
    description: 'Vessel MMSI',
    required: true,
    example: '123456789',
  })
  @IsMmsi()
  mmsi: number;

  @ApiProperty({ description: 'Vessel class', required: true, example: '1' })
  @IsNumber()
  classId: number;

  @ApiProperty({
    description: 'Vessel capability ids',
    required: false,
    example: '[1,2,3]',
  })
  @IsArray()
  @IsOptional()
  capabilityIds?: number[];

  @ApiProperty({
    description: 'Vessel station id',
    required: false,
    example: '1',
  })
  @IsNumber()
  @IsOptional()
  stationId?: number;

  @ApiProperty({ description: 'Vessel state id', required: true, example: '1' })
  @IsNumber()
  stateId: number;

  @ApiProperty({ description: 'Vessel type id', required: true, example: '1' })
  @IsNumber()
  typeId: number;

  @ApiProperty({
    description: 'Vessel inspector ids',
    required: false,
    example: '[1]',
  })
  @IsArray()
  @IsOptional()
  inspectorIds?: number[];
}
