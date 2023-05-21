import { IsOptional, IsString } from 'class-validator';

export class QueryVesselTypeDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  prefix?: string;
}
