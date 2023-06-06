import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class QueryStationAgreementCustomerContactFilterDto {
  @ApiProperty({ example: 'post@horten-kommune.no' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ example: '67577777' })
  @IsOptional()
  @IsPhoneNumber('NO')
  phone?: string;
}
