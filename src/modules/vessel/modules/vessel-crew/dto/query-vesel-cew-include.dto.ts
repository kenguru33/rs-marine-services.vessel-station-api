import { IsOptional, IsString } from 'class-validator';

export class QueryVesselCrewIncludeDto {
  @IsOptional()
  @IsString()
  include?: string;
}
