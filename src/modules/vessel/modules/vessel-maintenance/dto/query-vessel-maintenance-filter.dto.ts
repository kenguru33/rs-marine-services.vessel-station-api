import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryVesselMaintenanceFilterDto {
  @ApiProperty({ description: 'Filter by maintenance before date', required: false })
  @IsOptional()
  @IsString()
  before?: string; // date

  @ApiProperty({ description: 'Filter by maintenance after date', required: false })
  @IsOptional()
  @IsString()
  after?: string; //

  @ApiProperty({ description: 'Filter by vessel name contains value', required: false })
  @IsOptional()
  @IsString()
  vessel?: string; // vessel name
}
