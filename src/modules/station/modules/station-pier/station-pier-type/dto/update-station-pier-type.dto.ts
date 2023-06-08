import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateStationPierTypeDto {
  @ApiProperty({ example: 'Langside' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: 'Legger til langsides' })
  @IsOptional()
  @IsString()
  description?: string;
}
