import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateVesselMaintenanceDto {
  @ApiProperty({ example: 'Rutinemessig vedlikehold', required: false })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 0, required: false })
  @Max(100)
  @Min(0)
  @IsOptional()
  progress?: number; // in percent

  @ApiProperty({ example: 'Aker Mekaniske' })
  @IsString()
  responsible: string; // verksted, verft, etc

  @ApiProperty({ example: '1' })
  @IsNumber()
  approvedById: number; // maintenance approvers

  @ApiProperty({ example: '2023-10-05T14:00:00.000Z' })
  @IsDateString()
  fromDate: Date;

  @ApiProperty({ example: '2023-10-12T14:00:00.000Z' })
  @IsDateString()
  toDate: Date;

  @ApiProperty({ example: '1' })
  @IsNumber()
  vesselId: number;
}
