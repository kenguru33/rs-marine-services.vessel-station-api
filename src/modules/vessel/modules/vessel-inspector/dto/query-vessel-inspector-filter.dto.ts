import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryVesselInspectorFilterDto {
  @IsOptional()
  @IsString()
  name?: string;
}
