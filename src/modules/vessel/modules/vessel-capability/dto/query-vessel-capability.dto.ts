import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryVesselCapabilityDto {
  @IsOptional()
  @IsString()
  include?: string;

  @IsOptional()
  @IsString()
  name?: string;
}
