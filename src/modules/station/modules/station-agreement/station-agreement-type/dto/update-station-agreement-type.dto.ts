import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateStationAgreementTypeDto {
  @ApiProperty({ example: 'agreement type' })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ example: 'agreement type description' })
  @IsString()
  @IsOptional()
  description?: string;
}
