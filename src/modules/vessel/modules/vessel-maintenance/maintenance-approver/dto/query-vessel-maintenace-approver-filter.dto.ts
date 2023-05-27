import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class QueryVesselMaintenanceApproverFilterDto {
  @ApiProperty({ description: 'Filter by maintenance approver name contains value', required: false })
  @IsOptional()
  @IsString()
  name?: string; // vessel name
}