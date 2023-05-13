import { IsDateString, IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CreateVesselInspectorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPhoneNumber('NO')
  phone: string;

  @IsEmail()
  mail: string;

  @IsDateString()
  fromDate: string;
  @IsDateString()
  toDate: string;

  @IsNumber()
  vesselIds: number[];
}