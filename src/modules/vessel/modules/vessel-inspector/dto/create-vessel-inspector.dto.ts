import { IsArray, IsDateString, IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateVesselInspectorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPhoneNumber('NO')
  phone: string;

  @IsEmail()
  email: string;

  @IsArray()
  @IsOptional()
  vesselIds: number[];
}