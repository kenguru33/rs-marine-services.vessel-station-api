import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { ALLOWED_INCLUDES } from '../constants';

export class QueryVesselStateIncludeDto {
  @ApiProperty({
    description: 'Include relations. Valid values: ' + ALLOWED_INCLUDES,
    required: false,
    example: 'vessels, stateCategory',
  })
  @IsOptional()
  @IsString()
  include?: string;
}
