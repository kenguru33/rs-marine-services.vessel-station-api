import { IsOptional, IsString } from "class-validator";

export class QueryStationAgreementDto {
  @IsOptional()
  @IsString()
  include?: string;
}