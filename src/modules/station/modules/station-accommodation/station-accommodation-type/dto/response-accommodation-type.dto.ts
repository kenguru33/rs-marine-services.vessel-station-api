import { Expose, Type } from 'class-transformer';
import { ResponseStationDto } from '../../../../dto/response-station.dto';
import { ResponseAccommodationDto } from '../../dto/response-station-accommodation.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseAccommodationTypeDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 'BOLIG' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'Bolig for innlosering av mannskap' })
  @Expose()
  description?: string;

  @Expose()
  @Type(() => ResponseAccommodationDto)
  accommodations: ResponseAccommodationDto[];
}
