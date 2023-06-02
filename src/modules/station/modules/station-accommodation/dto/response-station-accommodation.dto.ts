import { Expose, Type } from 'class-transformer';
import { ResponseAccommodationTypeDto } from '../station-accommodation-type/dto/response-accommodation-type.dto';
import { ResponseStationDto } from '../../../dto/response-station.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseAccommodationDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  typeId: number;

  @Type(() => ResponseAccommodationTypeDto)
  @Expose()
  type: ResponseAccommodationTypeDto;

  @ApiProperty({ example: 'Bolig for innlosering av mannskap' })
  @Expose()
  description?: string;

  @ApiProperty({ example: 'Piratveien 1' })
  @Expose()
  address: string;

  @ApiProperty({ example: '1234' })
  @Expose()
  postalCode: string;

  @ApiProperty({ example: 'Tortuga' })
  @Expose()
  postalLocation: string;

  @ApiProperty({ example: 123 })
  @Expose()
  postalBox?: number;

  @ApiProperty({ example: 62 })
  @Expose()
  latitude: number;

  @ApiProperty({ example: 12 })
  @Expose()
  longitude: number;

  @Type(() => ResponseStationDto)
  @Expose()
  station: ResponseStationDto;

  stationId: number;
}
