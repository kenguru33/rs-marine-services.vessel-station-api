import { Expose } from "class-transformer";

export class ResponseVesselClassDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description?: string;
}