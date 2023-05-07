import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateStationAgreementCustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
