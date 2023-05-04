import { Expose, Type } from "class-transformer";
import { ResponseVesselStateCategoryDto } from "./response-vessel-state-category.dto";

export class ResponseVesselStateDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description?: string;

  stateCategpryId: number;

  @Type(() => ResponseVesselStateCategoryDto)
  @Expose()
  stateCategory: ResponseVesselStateCategoryDto;

} 