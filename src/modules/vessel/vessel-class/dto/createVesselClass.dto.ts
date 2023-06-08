import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVesselClassDto {
  @ApiProperty({ description: 'The name of the vessel class', required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The description of the vessel class',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;
}
