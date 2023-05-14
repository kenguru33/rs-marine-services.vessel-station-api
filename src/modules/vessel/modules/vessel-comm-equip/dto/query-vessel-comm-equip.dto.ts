import { IsOptional, IsString } from 'class-validator';

export class QueryVesselCommEquipDto {
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
