import { Expose, Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ResponsePierDto } from '../../station-pier/dto/response-pier.dto';
import { ResponseAccommodationDto } from './response-station-accommodation.dto';
import { ResponseStationAgreementDto } from '../../station-agreement/dto/response-station-agreement.dto';

export class QueryStationAccommodation {
  @IsOptional()
  @IsString()
  include?: string;

  @IsOptional()
  @IsString()
  type?: string;
}
