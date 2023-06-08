import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateVesselClassDto {
  @ApiProperty({ example: 'Fosen' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;
  
  @ApiProperty({ example: 'Fosen klassen' })
  @IsString()
  @IsOptional()
  description?: string;
}
