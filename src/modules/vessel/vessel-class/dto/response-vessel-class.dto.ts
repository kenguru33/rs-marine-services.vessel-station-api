import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../dto/response-vessel.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseVesselClassDto {
  @ApiProperty({ description: 'The id of the vessel class' })
  @Expose()
  id: number;

  @ApiProperty({ description: 'The name of the vessel class' })
  @Expose()
  name: string;

  @ApiProperty({ description: 'The description of the vessel class' })
  @Expose()
  description?: string;

  @Type(() => ResponseVesselDto)
  @Expose()
  vessels: ResponseVesselDto[];
}
