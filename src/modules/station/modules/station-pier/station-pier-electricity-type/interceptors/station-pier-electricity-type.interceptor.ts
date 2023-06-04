import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable, map } from 'rxjs';
import { ResponseStationPierElectricityTypeDto } from '../dto/response-station-pier-electricity-type.dto';

@Injectable()
export class StationPierElectricityTypeResponseTransformInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<
    | ResponseStationPierElectricityTypeDto
    | ResponseStationPierElectricityTypeDto[]
  > {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return data.map((d) => {
            return plainToInstance(ResponseStationPierElectricityTypeDto, d, {
              excludeExtraneousValues: true,
            });
          });
        } else {
          return plainToInstance(ResponseStationPierElectricityTypeDto, data, {
            excludeExtraneousValues: true,
          });
        }
      }),
    );
  }
}
