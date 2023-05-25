import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateVesselCapabilityDto {
  @ApiProperty({example: 'Dykking/ROV'})
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({example: 'Dykking og ROV'})
  @IsString()
  @IsOptional()
  description?: string;
}
