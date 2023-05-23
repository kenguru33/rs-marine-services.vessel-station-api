import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateVesselTypeDto {
  @ApiProperty({ example: 'FAST' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'RS' })
  @IsString()
  @IsOptional()
  prefix?: string;

  @ApiProperty({ example: 'Fast bemannet redningsskøyte' })
  @IsString()
  @IsOptional()
  description?: string;
}
