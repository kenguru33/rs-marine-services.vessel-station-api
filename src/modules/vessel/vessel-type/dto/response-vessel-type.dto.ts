import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../dto/response-vessel.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseVesselTypeDto {
  @ApiProperty({example: 1})
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  prefix: string;

  @ApiProperty()
  @Expose()
  description?: string;

  
  @Type(() => ResponseVesselDto)
  @Expose()
  vessels: ResponseVesselDto[];
}
