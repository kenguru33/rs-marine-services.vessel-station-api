import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryStationAgreementCustomerFilterDto {
  @ApiProperty({ example: '1' })
  @IsOptional()
  @IsString()
  name?: string;
}
