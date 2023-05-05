import { Expose } from "class-transformer";

export class ResponseVesselCapabilityDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description?: string;
}