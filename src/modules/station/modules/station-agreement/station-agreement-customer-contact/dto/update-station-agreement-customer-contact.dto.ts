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

export class UpdateStationAgreementCustomerContactDto {
  @ApiProperty({ example: '1' })
  @IsNumber()
  @IsOptional()
  customerId?: number;

  @ApiProperty({ example: '67577777' })
  @IsPhoneNumber('NO')
  @IsOptional()
  phone?: string;

  @ApiProperty({ example: 'post@horten-kommune.no' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsOptional()
  onCall?: boolean;
}
