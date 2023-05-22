import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

// do no place this file in the shared folder - this should be in the module folder and spescialized for the module
export class QueryIncludeDto {
  @ApiProperty({description:'Include relations', required: false})
  @IsOptional()
  @IsString()
  include: string
}