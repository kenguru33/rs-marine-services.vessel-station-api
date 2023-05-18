import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateStationAgreementDto {
  @IsNumber()
  customerId: number;

  @IsNumber()
  typeId: number; 

  @IsDateString()
  @IsOptional()
  startDate?: Date;

  @IsDateString()
  @IsOptional()
  endDate?: Date;

  @IsArray()
  @IsOptional()
  stationIds: number[];

  @IsArray()
  @IsOptional()
  capabilityIds: number[];

  @IsBoolean()
  @IsOptional()
  deliveryObligation?: boolean;

  @IsNumber()
  callOutTimeRequirement?: number;

  @IsString()
  @IsOptional()
  description?: string;
}

 // data: {
      //   description: 'data.description',
      //   deliveryObligation: true,
      //   callOutTimeRequirement: 30,
      //   startDate: new Date(),
      //   endDate: new Date(),
      //   customerId: 1,
      // },