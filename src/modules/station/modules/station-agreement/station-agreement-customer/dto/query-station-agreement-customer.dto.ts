import { IsOptional, IsString } from "class-validator";

export class QueryStationAgreementCustomerDto {
  @IsOptional()
  @IsString()
  include?: string;

  @IsOptional()
  @IsString()
  name?: string;

}