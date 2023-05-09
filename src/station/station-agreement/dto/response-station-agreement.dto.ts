import { Expose, Type } from 'class-transformer';
import { ResponseStationAgreementTypeDto } from '../station-agreement-type/dto/response-station-agreement-type.dto';
import { ResponseVesselCapabilityDto } from '../../../vessel/vessel-capability/dto/response-vessel-capability.dto';
import { ResponseStationDto } from '../../dto/response-station.dto';
import { ResponseStationAgreementCustomerDto } from '../station-agreement-customer/dto/response-station-agreement-customer.dto';

export class ResponseStationAgreementDto {
  @Expose()
  id: number;

  @Type(() => ResponseStationAgreementTypeDto)
  @Expose()
  type: ResponseStationAgreementTypeDto;

  @Expose()
  description: string;

  @Expose()
  deliveryObligation: boolean;

  @Expose()
  callOutTimeRequirement: number;

  @Expose()
  startDate: Date;

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
