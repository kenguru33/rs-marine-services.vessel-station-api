import { Optional } from '@nestjs/common';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateVesselSubStateDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @Optional()
  @IsString()
  description?: string;
  @IsOptional()
  @IsBoolean()
  inUse?: boolean;
  @IsOptional()
  @IsNumber()
  legacyId?: number;

  @IsNumber()
  parentStateId: number;
}
