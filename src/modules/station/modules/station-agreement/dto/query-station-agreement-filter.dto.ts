import { IsOptional, IsString } from "class-validator";

export class QueryStationAgreementFilterDto {
  @IsOptional()
  @IsString()
  include?: string;
}