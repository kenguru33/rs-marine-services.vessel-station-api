import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryStationAccommodationFilterDto {
  @ApiProperty({ example: 'Leilighet', required: false })
  @IsOptional()
  @IsString()
  type?: string;
}
