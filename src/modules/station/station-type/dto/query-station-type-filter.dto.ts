import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsOptional, IsString } from 'class-validator';

export class QueryStationTypeFilterDto {
  @ApiProperty({
    description: 'Filter by station name match value',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;
}
