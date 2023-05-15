import { IsOptional, IsString } from 'class-validator';

export class QueryVesselMaintenancepDto {
  @IsOptional()
  @IsString()
  include?: string;

  @IsOptional()
  @IsString()
  before?: string; // date

  @IsOptional()
  @IsString()
  after?: string; //

  @IsOptional()
  @IsString()
  vessel?: string; // vessel name
}
