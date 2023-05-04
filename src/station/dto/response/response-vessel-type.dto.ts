import { Expose } from "class-transformer";

export class ResponseVessselTypeDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description?: string;
}