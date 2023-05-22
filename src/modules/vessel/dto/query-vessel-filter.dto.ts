import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryVesselFilterDto {
  @ApiProperty({ description: 'Filter by name contains value', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Filter by prefix match value', required: false })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => +value)
  rs?: number;
}
