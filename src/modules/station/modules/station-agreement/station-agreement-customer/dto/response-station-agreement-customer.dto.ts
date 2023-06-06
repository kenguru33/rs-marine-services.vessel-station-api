import { Expose, Type } from "class-transformer";
import { ResponseStationAgreementCustomerContactDto } from "../../station-agreement-customer-contact/dto/response-station-agreement-customer-response.dto";
import { ResponseStationAgreementDto } from "../../dto/response-station-agreement.dto";
import { ApiProperty } from "@nestjs/swagger";

export class ResponseStationAgreementCustomerDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;
  
  @ApiProperty({ example: 'Horten Kommune' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'Avtale om beredskap og kapasiteter ved Horten Kommune' })
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