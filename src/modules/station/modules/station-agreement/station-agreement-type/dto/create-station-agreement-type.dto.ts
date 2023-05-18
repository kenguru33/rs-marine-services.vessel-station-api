import { IsOptional, IsString } from 'class-validator';

export class CreateStationAgreementTypeDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
