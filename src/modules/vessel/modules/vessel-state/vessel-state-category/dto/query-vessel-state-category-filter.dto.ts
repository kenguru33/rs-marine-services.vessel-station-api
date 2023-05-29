import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryVesselStateCategoryFilterDto {
  @ApiProperty({description: 'Filter by vessel name contains value', required: false })
  @IsOptional()
  @IsString()
  name?: string;
}
