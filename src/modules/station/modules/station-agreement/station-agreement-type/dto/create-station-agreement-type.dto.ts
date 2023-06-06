import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateStationAgreementTypeDto {
  // TODO: add example
  @ApiProperty({ example: 'agreement type' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'agreement type description' })
  @IsString()
  @IsOptional()
  description?: string;
}
