import { IsOptional, IsString } from 'class-validator';

export class QueryStationAgreementCustomerFilterDto {
  @IsOptional()
  @IsString()
  name?: string;
}
