import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';

export class CreateVesselMaintenanceApproverDto {
  @ApiProperty({ example: 'Tony Johansen' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'tony.johansen@rs.no' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '91679595' })
  @IsPhoneNumber('NO')
  phone: string;
}
