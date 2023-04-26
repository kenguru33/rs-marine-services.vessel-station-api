import { Optional } from '@nestjs/common';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateVesselStateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Optional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  inUse?: boolean;

  @IsNumber()
  stateCategoryId: number;
}
