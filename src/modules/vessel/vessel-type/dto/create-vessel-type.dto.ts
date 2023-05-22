import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateVesselTypeDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  prefix: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;
}
