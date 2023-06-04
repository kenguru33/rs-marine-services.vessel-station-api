import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateStationPierElectricityTypeDto {
  @ApiProperty({ example: '230V' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '230V AC 50Hz' })
  @IsString()
  @IsOptional()
  description?: string;
}
