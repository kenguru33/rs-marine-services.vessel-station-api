import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateStationAccommodationTypeDto {
  @ApiProperty({ example: 'Leilighet' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Type leilighet' })
  @IsString()
  @IsOptional()
  description?: string;
}
