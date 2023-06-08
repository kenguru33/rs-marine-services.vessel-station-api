import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryVesselCommunicationEquipmentFilterDto {
  @ApiProperty({ description: 'Filter by type match value', required: false })
  @IsOptional()
  @IsString()
  type?: string;

  @ApiProperty({
    description: 'Filter by name contains value',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;
}
