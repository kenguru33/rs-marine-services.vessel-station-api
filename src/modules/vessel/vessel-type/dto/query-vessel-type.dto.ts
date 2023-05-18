import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryVesselTypeDto {
  @IsOptional()
  @IsString()
  include?: string;

  @IsOptional()
  @IsString()
  name?: string;

  
  @IsOptional()
  @IsString()
  prefix?: string;
}
