import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class UpdateVesselSubStateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  inUse?: boolean;

  @IsOptional()
  @IsNumber()
  legacyStateId?: number;

  @IsNumber()
  @IsOptional()
  parentStateId?: number;
}
