import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class QueryVesselClassDto {
  @ApiProperty({required: false, description: 'include relations. Valid values: vessels'})
  @IsString()
  include?: string;

  @IsOptional()
  @IsString()
  name?: string;
}
