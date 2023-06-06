import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateStationAgreementCustomerContactDto {
  @ApiProperty({ example: '1' })
  @IsNumber()
  customerId: number;

  @ApiProperty({ example: '67577777' })
  @IsPhoneNumber('NO')
  @IsOptional()
  phone?: string;

  @ApiProperty({ example: 'post@horten-kommune.noo' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsOptional()
  onCall?: boolean;
}
