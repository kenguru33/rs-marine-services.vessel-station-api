import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UpdateVesselCommunicationEquipmentDto {
  @ApiProperty({ example: '1' })
  @IsNumber()
  typeId: number;

  @ApiProperty({ example: '2' })
  @IsNumber()
  numberOfUnits: number;
}
