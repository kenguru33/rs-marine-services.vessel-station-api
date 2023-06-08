import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ResponseVesselStateCategoryDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 'Operativ' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'Operativ status kategori' })
  @Expose()
  description?: string;
}
