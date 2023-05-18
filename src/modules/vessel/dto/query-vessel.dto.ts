import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryVesselDto {
  @IsOptional()
  @IsString()
  include?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => +value)
  rs?: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => +value)
  typeId?: number;

  

}
