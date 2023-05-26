import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ResponseVesselCommunicationEquipmentTypeDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 'VHF' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'VHF radio' })
  @Expose()
  description?: string;
}
