import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../dto/response-vessel.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseVesselTypeDto {
  @ApiProperty({example: 1})
  @Expose()
  id: number;

  @ApiProperty({example: 'FAST'})
  @Expose()
  name: string;

  @ApiProperty({example: 'RS'})
  @Expose()
  prefix: string;

  @ApiProperty({example: 'Fast bemannet redningsskøyte'})
  @Expose()
  description?: string;

  
  @Type(() => ResponseVesselDto)
  @Expose()
  vessels: ResponseVesselDto[];
}
