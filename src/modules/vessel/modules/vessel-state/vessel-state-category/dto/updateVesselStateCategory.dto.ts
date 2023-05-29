import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateVesselStateCategoryDto {
  @ApiProperty({ example: 'Operativ' })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @ApiProperty({ example: 'Operativ status kategori' })
  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  inUse?: boolean;
}
