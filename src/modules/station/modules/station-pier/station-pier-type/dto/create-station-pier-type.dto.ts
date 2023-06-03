import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateStationPierTypeDto {
  @ApiProperty({ example: 'Bås' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Legger til i bås' })
  @IsString()
  @IsOptional()
  description?: string;
}
