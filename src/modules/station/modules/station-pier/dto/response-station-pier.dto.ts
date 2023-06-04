import { Expose, Type } from 'class-transformer';
import { ResponseStationPierTypeDto } from '../station-pier-type/dto/response-pier-type.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ResponseStationDto } from '../../../dto/response-station.dto';

export class ResponseStationPierDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 5 })
  @Expose()
  length: number;

  @ApiProperty({ example: 2 })
  @Expose()
  width: number;

  @ApiProperty({ example: 2 })
  @Expose()
  minimumDepth: number;

  typeId: number;

  @Type(() => ResponseStationPierTypeDto)
  @Expose()
  type: ResponseStationPierTypeDto;

  @ApiProperty({ example: false })
  @Expose()
  floating: boolean;

  @ApiProperty({ example: false })
  @Expose()
  diesel: boolean;

  @ApiProperty({ example: false })
  @Expose()
  petrol: boolean;

  @ApiProperty({ example: false })
  @Expose()
  storageSpace: boolean;

  @ApiProperty({ example: true })
  @Expose()
  coldWater: boolean;

  @ApiProperty({ example: false })
  @Expose()
  hotWater: boolean;

  stationId: number;

  @Expose()
  @Type(() => ResponseStationDto)
  station: ResponseStationDto;
}
