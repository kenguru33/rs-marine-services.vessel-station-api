import { IsOptional, IsString } from "class-validator";

export class QueryIncludeDto {
  @IsOptional()
  @IsString()
  include: string
}