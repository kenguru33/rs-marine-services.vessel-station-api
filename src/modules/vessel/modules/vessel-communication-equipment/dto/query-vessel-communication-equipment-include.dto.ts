import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { ALLOWED_INCLUDES } from '../constants';

export class QueryVesselCommunicationEquipmentIncludeDto {
  @ApiProperty({
    description: `Include relations. Valid values: ${ALLOWED_INCLUDES}`,
    required: false,
    example: 'type, vessel',
  })
  @IsOptional()
  @IsString()
  include?: string;
}
