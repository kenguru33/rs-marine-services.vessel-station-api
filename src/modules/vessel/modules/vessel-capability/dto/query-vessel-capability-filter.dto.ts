import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryVesselCapabilityFilterDto {
  @ApiProperty({ description: 'Filter by name contains value', required: false })
  @IsOptional()
  @IsString()
  name?: string;
}
