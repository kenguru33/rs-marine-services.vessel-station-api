import { IsArray, IsDateString, IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class UpdateVesselInspectorDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @IsPhoneNumber('NO')
  @IsOptional()
  phone?: string;

  @IsEmail()
  @IsOptional() 
  email?: string;

  @IsArray()
  @IsOptional()
  vesselIds?: number[];
}