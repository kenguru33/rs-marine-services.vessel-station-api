import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateStationAgreementDto {
  @IsNumber()
  @IsOptional()
  customerId: number;

  @IsNumber()
  @IsOptional()
  agreementTypeId: number;

  @IsDateString()
  @IsOptional()
  startDate?: Date;

  @IsDateString()
  @IsOptional()
  endDate?: Date;

  @IsArray()
  @IsOptional()
  stationIds?: number[];

  @IsArray()
  @IsOptional()
  capabilityIds?: number[];

  @IsBoolean()
  @IsOptional()
  deliveryObligation?: boolean;

  @IsNumber()
  @IsOptional()
  callOutTimeRequirement?: number;

  @IsString()
  @IsOptional()
  description?: string;
}
