import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDateString, IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateVesselInspectorDto {
  @ApiProperty({ example: 'Tony Johansen' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '91679595' })
  @IsPhoneNumber('NO')
  phone: string;

  @ApiProperty({ example: 'tony.johansen@rs.no'})
  @IsEmail()
  email: string;

  @ApiProperty({ example: [1]})
  @IsArray()
  @IsOptional()
  vesselIds: number[];
}