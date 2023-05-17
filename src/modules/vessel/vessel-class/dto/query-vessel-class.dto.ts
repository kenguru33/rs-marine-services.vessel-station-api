import { IsOptional, IsString } from "class-validator";

export class QueryVesselClassDto {
  @IsOptional()
  @IsString()
  include?: string;

  @IsOptional()
  @IsString()
  name?: string;
}
