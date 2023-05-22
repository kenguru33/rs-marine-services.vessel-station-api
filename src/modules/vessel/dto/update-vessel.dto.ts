import { ApiProperty } from '@nestjs/swagger';
import { IsMmsi } from '@redningsselskapet/class-validator-ais';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateVesselDto {
  @ApiProperty({
    description: 'Vessel name',
    required: true,
    example: 'Bernt Anker',
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @ApiProperty({ description: 'Vessel prefix', required: true, example: '225' })
  @IsNumber()
  @IsOptional()
  rs: number;

  @ApiProperty({
    description: 'Vessel MMSI',
    required: true,
    example: '123456789',
  })
  @IsMmsi()
  @IsOptional()
  mmsi: number;

  @ApiProperty({ description: 'Vessel class', required: true, example: '1' })
  @IsNumber()
  @IsOptional()
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
  @IsOptional()
  stateId: number;

  @ApiProperty({ description: 'Vessel type id', required: true, example: '1' })
  @IsNumber()
  @IsOptional()
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
