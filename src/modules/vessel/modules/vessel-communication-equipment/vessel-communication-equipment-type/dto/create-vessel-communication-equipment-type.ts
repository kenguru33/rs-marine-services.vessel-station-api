import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVesselCommunicationEquipmentTypeDto {
  @ApiProperty({ example: 'VHF' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'VHF radio' })
  @IsString()
  @IsOptional()
  description: string;
}
