import { IsOptional, IsString } from 'class-validator';

export class QueryStationAccommodationDto {
  @IsOptional()
  @IsString()
  include?: string;

  @IsOptional()
  @IsString()
  type?: string;
}
