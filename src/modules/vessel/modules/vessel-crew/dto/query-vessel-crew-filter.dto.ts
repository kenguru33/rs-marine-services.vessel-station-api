import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryVesselCrewFilterDto {
  @ApiProperty({ description: 'Filter by crew name contains', required: false })
  @IsOptional()
  @IsString()
  name?: string;
}
