import { IsOptional, IsString } from 'class-validator';

export class QueryVesselMaintenancepDto {
  @IsOptional()
  @IsString()
  include?: string;
}
