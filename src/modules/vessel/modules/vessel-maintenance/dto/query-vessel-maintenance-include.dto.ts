import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { ALLOWED_INCLUDES } from '../constant';

export class QueryVesselMaintenanceIncludeDto {
  @ApiProperty({
    description: 'Include relations. Valid values: ' + ALLOWED_INCLUDES,
    required: false,
    example: 'vessel',
  })
  @IsOptional()
  @IsString()
  include?: string;
}
