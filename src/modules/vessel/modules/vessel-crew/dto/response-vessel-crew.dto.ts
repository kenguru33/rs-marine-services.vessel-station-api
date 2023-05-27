import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ResponseVesselDto } from '../../../dto/response-vessel.dto';
import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseVesselCrewDto {
  @ApiProperty({ example: 'Jack Sparrow' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'Captain' })
  @Expose()
  title: string;

  @ApiProperty({ example: 1 })
  @Type(() => ResponseVesselDto)
  @Expose()
  vessel: ResponseVesselDto;
}
