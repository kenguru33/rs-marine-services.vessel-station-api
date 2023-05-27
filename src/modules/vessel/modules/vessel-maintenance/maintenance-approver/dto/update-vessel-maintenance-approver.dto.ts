import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class UpdateVesselMaintenanceApproverDto {
    @ApiProperty({ example: 'Will Turner' })
    @IsString()
    @IsOptional()
    name: string;

    @ApiProperty({ example: 'will.turner@rs.no' })
    @IsEmail()
    email: string;

    @IsPhoneNumber('NO')
    @IsOptional()
    phone: string;
}