import { IsOptional, IsString } from 'class-validator';

export class UpdateStationAgreementTypeDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
