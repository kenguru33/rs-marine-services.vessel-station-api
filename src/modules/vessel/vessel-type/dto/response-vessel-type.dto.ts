import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../dto/response-vessel.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseVesselTypeDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 'Sjøredningskorps' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'RS' })
  @Expose()
  prefix: string;

  @ApiProperty({ example: 'Frivillig Redningsskøyte' })
  @Expose()
  description?: string;

  @Type(() => ResponseVesselDto)
  @Expose()
  vessels: ResponseVesselDto[];
}
