import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateStationAgreementCustomerDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;
}
