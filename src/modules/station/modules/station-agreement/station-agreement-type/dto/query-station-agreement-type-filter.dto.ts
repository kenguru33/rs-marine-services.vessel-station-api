import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryStationAgreementTypeFilterDto {
  @ApiProperty({ example: 'agreement type', required: false })
  @IsOptional()
  @IsString()
  name?: string;
}
