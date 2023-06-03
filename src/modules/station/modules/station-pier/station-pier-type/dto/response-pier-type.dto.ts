import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class ResponseStationPierTypeDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 'Bås' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'Legger til i bås' })
  @Expose()
  description?: string;

  @Expose()
  @Type(() => ResponseStationPierTypeDto)
  piers: ResponseStationPierTypeDto[];
}
