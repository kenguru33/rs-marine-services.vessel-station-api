import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { ALLOWED_INCLUDES } from '../constants';

export class QueryStationAccommodationIncludeDto {
  @ApiProperty({
    description: 'Include relations. Valid values: ' + ALLOWED_INCLUDES,
    required: false,
    example: 'type, station',
  })
  @IsOptional()
  @IsString()
  include: string;
}
