import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { ALLOWED_INCLUDES } from "../constants";

// do no place this file in the shared folder - this should be in the module folder and spescialized for the module
export class QueryVesselClassIncludeDto {
  @ApiProperty({description:`Include relations. Valid values: ${ALLOWED_INCLUDES}`, required: false})
  @IsOptional()
  @IsString()
  include: string
}