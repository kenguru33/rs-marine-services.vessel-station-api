import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../vessel/dto/response-vessel.dto';
import { ResponseAccommodationDto } from '../modules/station-accommodation/dto/response-station-accommodation.dto';
import { ResponseStationAgreementDto } from '../modules/station-agreement/dto/response-station-agreement.dto';
import { ResponsePierDto } from '../modules/station-pier/dto/response-pier.dto';
import { ResponseStationTypeDto } from '../station-type/dto/response-station-type.dto';

export class ResponseStationDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 'Tortuga' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'Jack Sparrow' })
  @Expose()
  tilFelt?: string;

  @ApiProperty({ example: 'Twelve Daggers 12' })
  @Expose()
  address: string;

  @ApiProperty({ example: '1234' })
  @Expose()
  postalCode: string;

  @ApiProperty({ example: 'Tortuga' })
  @Expose()
  postalLocation: string;

  @ApiProperty({ example: '1234' })
  @Expose()
  postalBox?: number;

  @ApiProperty({ example: 'Salty Cove' })
  @Expose()
  postalDelivery?: string;

  @Expose()
  latitude: number;

  @Expose()
  longitude: number;

  @Type(() => ResponsePierDto)
  @Expose()
  pier?: ResponsePierDto;

  @Expose()
  @Type(() => ResponseAccommodationDto)
  accommodation?: ResponseAccommodationDto;

  @Type(() => ResponseStationTypeDto)
  @Expose()
  type: ResponseStationTypeDto;

  @Expose()
  @Type(() => ResponseVesselDto)
  vessels?: ResponseVesselDto[];

  @Expose()
  @Type(() => ResponseStationAgreementDto)
  agreements?: ResponseStationAgreementDto[];
}
