import { IsDateString, IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

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
  mail?: string;

  @IsDateString()
  @IsOptional() 
  fromDate?: string;

  @IsDateString()
  @IsOptional()
  toDate?: string;

  @IsNumber()
  @IsOptional()
  vesselIds?: number[];
}