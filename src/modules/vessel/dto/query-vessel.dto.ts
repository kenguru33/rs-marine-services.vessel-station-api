import { ApiParam, ApiProperty, ApiQuery } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryVesselDto {
  // @ApiProperty({
  //   type: String,
  //   required: false,
  //   description:
  //     'Include relations. Valid values: state, class, station, capabilities, state.stateCategory, type, communicationEquipments.type, inspectors, maintenances, maintenances.approvedBy',
  // })
  @IsOptional()
  @IsString()
  include?: string | undefined;

  // @ApiProperty({
  //   type: String,
  //   required: false,
  //   description: 'filter by name contains value. Example: Halfdan',
  // })
  @IsOptional()
  @IsString()
  name?: string | undefined;

  // @ApiProperty({
  //   type: String,
  //   required: false,
  //   description: 'filter by rs match number. Example: 136',
  // })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => +value)
  rs?: number | undefined;
}
