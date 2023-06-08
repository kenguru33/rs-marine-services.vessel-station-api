import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator';

export class CreateStationAgreementCustomerDto {
  @ApiProperty({ example: 'Horten Kommune' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Avtale om beredskap og kapasitet i Horten kommune' })
  @IsString()
  @IsOptional()
  description?: string;
}
