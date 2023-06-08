import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryVesselInspectorFilterDto {
  @ApiProperty({ description: 'Filter by name contains value', required: false })
  @IsOptional()
  @IsString()
  name?: string;
}
