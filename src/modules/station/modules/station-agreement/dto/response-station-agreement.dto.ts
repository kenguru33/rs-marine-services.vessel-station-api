import { Expose, Type } from 'class-transformer';
import { ResponseStationAgreementTypeDto } from '../station-agreement-type/dto/response-station-agreement-type.dto';
import { ResponseVesselCapabilityDto } from '../../../../vessel/modules/vessel-capability/dto/response-vessel-capability.dto';
import { ResponseStationDto } from '../../../dto/response-station.dto';
import { ResponseStationAgreementCustomerDto } from '../station-agreement-customer/dto/response-station-agreement-customer.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseStationAgreementDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @Type(() => ResponseStationAgreementTypeDto)
  @Expose()
  type: ResponseStationAgreementTypeDto;

  @ApiProperty({ example: 'Avtale mellom RS og Lokal Horten kommune' })
  @Expose()
  description: string;

  @ApiProperty({ example: true })
  @Expose()
  deliveryObligation: boolean;

  @ApiProperty({ example: 40 })
  @Expose()
  callOutTimeRequirement: number;

  @ApiProperty({ example: '2023-10-05T14:00:00.000Z' })
  @Expose()
  startDate: Date;

  @ApiProperty({ example: '2028-10-05T14:00:00.000Z' })
  @Expose()
  endDate: Date;

  @Type(() => ResponseStationAgreementCustomerDto)
  @Expose()
  customer: ResponseStationAgreementCustomerDto;

  @Type(() => ResponseStationDto)
  @Expose()
  stations: ResponseStationDto[];

  @Type(() => ResponseVesselCapabilityDto)
  @Expose()
  capabilities: ResponseVesselCapabilityDto[];

  capabilityIds: number[];
  typeId: number;
  customerId: number;
  stationIds: number[];
}
