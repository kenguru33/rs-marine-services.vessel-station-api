import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../dto/response-vessel.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseVesselClassDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 'Skomvær' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'Fartøysklasse' })
  @Expose()
  description?: string;

  @Type(() => ResponseVesselDto)
  @Expose()
  vessels: ResponseVesselDto[];
}
