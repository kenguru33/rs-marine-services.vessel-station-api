import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateVesselStateCategoryDto {
  @ApiProperty({ example: 'Operativ' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Operativ status kategori' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  inUse?: boolean;
}
