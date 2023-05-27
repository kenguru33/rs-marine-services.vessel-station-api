import { Expose } from 'class-transformer';
import { ResponseVesselDto } from '../../../dto/response-vessel.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseVesselInspectorDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 'Tony Johansen' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'tony.johansen@rs.no' })
  @Expose()
  email: string;

  @ApiProperty({ example: '91679595' })
  @Expose()
  phone: string;

  @Expose()
  vessels: ResponseVesselDto[];
}
