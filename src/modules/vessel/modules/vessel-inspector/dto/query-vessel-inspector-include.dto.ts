import { IsOptional, IsString } from 'class-validator';

export class QueryVesselInspectorInclude {
  @IsOptional()
  @IsString()
  include?: string;
}
