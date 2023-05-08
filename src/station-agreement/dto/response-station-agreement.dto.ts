import { Expose, Type } from 'class-transformer';
import { ResponseStationAgreementTypeDto } from '../station-agreement-type/dto/response-station-agreement-type.dto';

export class ResponseStationAgreementDto {
  @Expose()
  id: number;

  @Expose()
  @Type(() => ResponseStationAgreementTypeDto)
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

  typeId: number;
  customerId: number;
  stationIds: number[];
}
