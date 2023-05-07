import { Expose } from "class-transformer";

export class ResponseStationAgreementDto {
  @Expose()
  id: number;

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

  
  customerId: number;
  stationIds: number[];
}