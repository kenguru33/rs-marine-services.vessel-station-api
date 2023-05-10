import { IsOptional, IsString } from 'class-validator';

export class UpdateStationTypeDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
