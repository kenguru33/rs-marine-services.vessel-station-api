import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber } from 'class-validator';

export class CreateStationPierDto {
  @ApiProperty({ example: 5 })
  @IsNumber()
  length: number;

  @ApiProperty({ example: 2 })
  @IsNumber()
  width: number;

  @ApiProperty({ example: 2 })
  @IsNumber()
  minimumDepth: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  typeId: number;

  @ApiProperty({ example: false })
  @IsBoolean()
  floating: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  diesel: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  petrol: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  storageSpace: boolean;

  @ApiProperty({ example: true })
  @IsBoolean()
  coldWater: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  hotWater: boolean;

  @ApiProperty({ example: 1 })
  @IsNumber()
  stationId: number;
}
