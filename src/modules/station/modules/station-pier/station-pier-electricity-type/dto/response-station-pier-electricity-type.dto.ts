import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { ResponseStationPierTypeDto } from '../../station-pier-type/dto/response-pier-type.dto';
import { ResponseStationPierDto } from '../../dto/response-station-pier.dto';

export class ResponseStationPierElectricityTypeDto {
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
  @Type(() => ResponseStationPierDto)
  piers: ResponseStationPierDto[];
}
