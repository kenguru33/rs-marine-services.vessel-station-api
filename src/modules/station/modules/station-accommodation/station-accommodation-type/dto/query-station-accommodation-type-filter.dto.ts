import { ApiProperty } from "@nestjs/swagger";
import { Allow, IsOptional, IsString } from "class-validator";

export class QueryStationAccommodationTypeFilterDto {
    @ApiProperty({ description: 'Filter by station name contains value', required: false })
    @IsOptional()
    @IsString()
    name?: string;
}