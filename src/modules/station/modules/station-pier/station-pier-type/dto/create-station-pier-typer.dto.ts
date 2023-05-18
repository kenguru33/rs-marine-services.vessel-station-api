import { IsOptional, IsString } from 'class-validator';

export class CreateStationPierTypeDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
