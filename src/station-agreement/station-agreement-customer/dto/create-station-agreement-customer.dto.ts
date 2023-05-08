import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStationAgreementCustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

}
