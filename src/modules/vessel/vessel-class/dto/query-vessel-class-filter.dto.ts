import { IsOptional, IsString } from 'class-validator';

export class QueryVesselClassFilterDto {
  
  @IsOptional()
  @IsString()
  name?: string;
}
