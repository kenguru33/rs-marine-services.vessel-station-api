import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryVesselCrewFilterDto {
  @IsOptional()
  @IsString()
  name?: string;
}
