import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateStationAgreementCustomerContactDto {
  
  @IsNumber()
  @IsOptional()
  customerId?: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly phone?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly email?: string;

  @IsBoolean()
  @IsOptional()
  onCall?: boolean;

}