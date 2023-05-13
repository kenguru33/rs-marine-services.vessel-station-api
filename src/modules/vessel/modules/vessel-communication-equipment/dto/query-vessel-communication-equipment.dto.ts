import { IsOptional, IsString } from 'class-validator';

export class QueryVesselCommunicationEquipmentDto {
  @IsOptional()
  @IsString()
  include?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  name?: string;
}
