import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVesselCommunicationEquipmentDto {
  @ApiProperty({ example: '1' })
  @IsNumber()
  vesselId: number;

  @ApiProperty({ example: 'Kommunikasjon' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: '1' })
  @IsNumber()
  typeId: number;

  @ApiProperty({ example: '2' })
  @IsNumber()
  numberOfUnits: number;
}
