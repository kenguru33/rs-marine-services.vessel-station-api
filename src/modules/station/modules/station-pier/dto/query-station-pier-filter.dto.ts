import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsOptional, IsString } from 'class-validator';

export class QueryStationPierFilterDto {
  @ApiProperty({
    description: 'Filter by type match value',
    required: false,
    example: 'Langside',
  })
  @IsOptional()
  @IsString()
  type?: string;
}
