import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryVesselCrewDto {
  @IsOptional()
  @IsString()
  include?: string;

  @IsOptional()
  @IsString()
  name?: string;

}
