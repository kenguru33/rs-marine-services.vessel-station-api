import { IsString, IsNotEmpty, IsBoolean, IsOptional, IsNumber } from "class-validator";

export class CreateStateDto {
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
  legacyId?: number;
}