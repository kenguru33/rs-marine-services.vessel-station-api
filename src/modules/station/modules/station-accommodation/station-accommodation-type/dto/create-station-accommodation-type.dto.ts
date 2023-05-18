import { IsOptional, IsString } from 'class-validator';

export class CreateStationAccommodationTypeDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
