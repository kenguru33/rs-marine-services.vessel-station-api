import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ResponseVesselDto } from '../../../dto/response-vessel.dto';
import { Expose, Type } from 'class-transformer';

export class VesselCrewResponseDto {
  @Expose()
  name: string;

  @Expose()
  title: string;

  @Type(() => ResponseVesselDto)
  @Expose()
  vessel: ResponseVesselDto;
}
