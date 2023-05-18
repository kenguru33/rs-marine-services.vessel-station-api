import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateStationAgreementCustomerContactDto {
  
  @IsNumber()
  customerId: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  email?: string;

  @IsBoolean()
  @IsOptional()
  onCall?: boolean;

}