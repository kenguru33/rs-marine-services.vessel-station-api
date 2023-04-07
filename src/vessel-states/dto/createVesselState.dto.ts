import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsNumber,
  IsArray,
} from 'class-validator';

export class CreateVesselStateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  inUse?: boolean;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  legacyStateId?: number;
}
