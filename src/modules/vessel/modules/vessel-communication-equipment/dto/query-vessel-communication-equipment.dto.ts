import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryVesselCommunicationEquipmentDto {
  @IsOptional()
  @IsString()
  include?: string;

  @IsOptional()
  @IsString()
  type?: string;
}
