import { IsOptional, IsString } from 'class-validator';

export class UpdateeStationAccommodationTypeDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
