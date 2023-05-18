import { Expose, Type } from "class-transformer";
import { ResponseStationAgreementCustomerContactDto } from "../../station-agreement-customer-contact/dto/response-station-agreement-customer-response.dto";
import { ResponseStationAgreementDto } from "../../dto/response-station-agreement.dto";

export class ResponseStationAgreementCustomerDto {
  @Expose()
  id: number;
  
  @Expose()
  name: string;

  @Expose()
  description: string;

  @Type(() => ResponseStationAgreementCustomerContactDto)
  @Expose()
  contacts : ResponseStationAgreementCustomerContactDto[];

  @Type(() => ResponseStationAgreementDto)
  @Expose()
  agreements: ResponseStationAgreementDto[]

  agreementIds: number[];

}