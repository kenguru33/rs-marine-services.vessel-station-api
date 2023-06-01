import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateStationTypeDto {
  @ApiProperty({ example: 'FAST' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Fast bemannet stasjon' })
  @IsString()
  @IsOptional()
  description?: string;
}