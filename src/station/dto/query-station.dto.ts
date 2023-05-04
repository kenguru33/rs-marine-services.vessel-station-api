import { IsOptional, IsString } from "class-validator";

export class QueryStationDto {
    @IsOptional()
    @IsString()
    include?: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    postalLocation?: string;
}