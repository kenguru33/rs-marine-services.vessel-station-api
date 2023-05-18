import { IsArray, IsEmail, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateVesselMaintenanceApproverDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber('NO')
    phone: string;
}