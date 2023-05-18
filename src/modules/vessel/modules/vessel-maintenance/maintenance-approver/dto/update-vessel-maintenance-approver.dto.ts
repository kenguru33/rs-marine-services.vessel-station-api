import { IsEmail, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class UpdateVesselMaintenanceApproverDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber('NO')
    @IsOptional()
    phone: string;

    @IsNumber()
    @IsOptional()
    maintenanceId?: number;
}