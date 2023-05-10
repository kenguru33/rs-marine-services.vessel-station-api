import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryVesselBuildInfoDto {
  @IsOptional()
  @IsString()
  include?: string;

}
