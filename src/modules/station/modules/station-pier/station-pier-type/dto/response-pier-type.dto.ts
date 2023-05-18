import { Expose } from 'class-transformer';

export class ResponsePierTypeDto {
  @Expose()
  id: number;

  @Expose()
  name: string;
  
  @Expose()
  description?: string;
}
