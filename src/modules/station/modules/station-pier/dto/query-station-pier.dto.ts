import { Allow, IsOptional, IsString } from 'class-validator';

export class QueryStationPierDto {
  @IsOptional()
  @IsString()
  include?: string;

  @IsOptional()
  @IsString()
  type?: string;

}
