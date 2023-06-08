import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateStationTypeDto {
  @ApiProperty({ example: 'FAST' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'Fast bemannet stasjon' })
  @IsString()
  @IsOptional()
  description?: string;
}
