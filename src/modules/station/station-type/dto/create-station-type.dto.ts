import { IsOptional, IsString } from "class-validator";

export class CreateStationTypeDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}