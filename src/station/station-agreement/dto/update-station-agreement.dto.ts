export class UpdateStationAgreementDto {
  customerId: number;
  startDate: Date;
  endDate: Date;
  stations: number[];
  deliveryObligation: boolean;
  callOutTimeRequirements: number;
  description: string;
}


