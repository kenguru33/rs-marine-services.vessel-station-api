import { Expose } from "class-transformer";

export class ResponseVesselStateCategoryDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description?: string;
}