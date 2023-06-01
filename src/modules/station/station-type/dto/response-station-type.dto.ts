import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class ResponseStationTypeDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 'FAST' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'Fast bemannet stasjon' })
  @Expose()
  description: string;

  @Expose()
  @Type(() => ResponseStationTypeDto)
  stations: ResponseStationTypeDto[];

}
