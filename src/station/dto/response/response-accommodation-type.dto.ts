import { Expose } from "class-transformer";

export class ResponseAccommodationTypeDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description?: string;
}