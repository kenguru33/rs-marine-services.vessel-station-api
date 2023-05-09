import { Expose } from "class-transformer";

export class ResponseStationAgreementTypeDto {
  
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description: string;
}
