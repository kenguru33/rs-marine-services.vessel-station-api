import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class UpdateVesselStateDto {
  @ApiProperty({ example: 'Operativ' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Operativ status' })
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  inUse?: boolean;

  @IsNumber()
  @IsOptional()
  stateCategoryId?: number;
}
