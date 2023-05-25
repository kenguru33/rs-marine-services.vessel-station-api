import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateVesselCommEquipTypeDto {
  @ApiProperty({ example: 'VHF - updated' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'VHF radio - updated' })
  @IsString()
  @IsOptional()
  description: string;
}
