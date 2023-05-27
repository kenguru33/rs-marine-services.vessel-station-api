import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVesselCrewDto {
  @ApiProperty({ example: 'Jack Sparrow' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Captain' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  vesselId?: number;
}
