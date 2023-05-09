import { IsOptional, IsString } from 'class-validator';

export class UpdateStationPierTypeDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
