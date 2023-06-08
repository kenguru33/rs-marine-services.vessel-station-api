import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateStationAgreementCustomerDto {
  @ApiProperty({ example: 'Horten Kommune' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;
}
