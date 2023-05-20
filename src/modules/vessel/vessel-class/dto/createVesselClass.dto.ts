import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVesselClassDto {
  @ApiProperty({ example: 'Skomvær' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Fartøysklasse' })
  @IsString()
  @IsOptional()
  description?: string;
}
