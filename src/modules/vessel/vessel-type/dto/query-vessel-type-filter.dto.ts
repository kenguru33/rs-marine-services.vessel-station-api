import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryVesselTypeFilterDto {
  @ApiProperty({ description: 'Filter by name contains value', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Filter by prefix match value', required: false })
  @IsOptional()
  @IsString()
  prefix?: string;
}
