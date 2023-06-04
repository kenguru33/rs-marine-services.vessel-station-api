import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsOptional, IsString } from 'class-validator';

export class QueryStationPierElectricityTypeFilterDto {
  @ApiProperty({
    description: 'Filter by electricity type name conatains value',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;
}
