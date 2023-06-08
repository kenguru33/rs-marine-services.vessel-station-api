import { ApiProperty } from '@nestjs/swagger';
import { ALLOWED_INCLUDES } from '../constants';
import { IsOptional, IsString } from 'class-validator';

export class QueryVesselMaintenanceApproverIncludeDto {
  @ApiProperty({
    description: 'Include relations. Valid values: ' + ALLOWED_INCLUDES,
    required: false,
    example: 'vessel',
  })
  @IsOptional()
  @IsString()
  include?: string;
}
