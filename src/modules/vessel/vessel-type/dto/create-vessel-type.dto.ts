import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateVesselTypeDto {
  @ApiProperty({ example: 'Ambulanse' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'EYR' })
  @IsString()
  prefix: string;

  @ApiProperty({ example: 'Ambulansefartøy' })
  @IsString()
  @IsOptional()
  description?: string;
}
