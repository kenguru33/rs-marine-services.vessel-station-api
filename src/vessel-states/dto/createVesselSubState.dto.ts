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
  legacyStateId?: number;

  @IsNumber()
  parentStateId: number;
}
