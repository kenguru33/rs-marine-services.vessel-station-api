import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateStationDto {
  @IsString()
  @IsOptional()
  name: string
}
