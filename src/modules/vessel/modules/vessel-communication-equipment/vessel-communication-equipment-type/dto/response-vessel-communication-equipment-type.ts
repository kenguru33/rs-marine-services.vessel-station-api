import { Expose } from "class-transformer";

export class ResponseVesselCommunicationEquipmentTypeDto {
  @Expose()
  id: number;
  
  @Expose()
  name: string;

  @Expose()
  description?: string;

}