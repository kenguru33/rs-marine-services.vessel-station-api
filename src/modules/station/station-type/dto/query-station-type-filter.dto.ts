import { ApiProperty } from "@nestjs/swagger";
import { Allow, IsOptional, IsString } from "class-validator";

export class QueryStationTypeFilterDto {
    @ApiProperty({ description: 'Filter by station name contains value', required: false })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty({ description: 'Filter by station type contains value', required: false })
    @IsOptional()
    @IsString()
    type?: string;
}