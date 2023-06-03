import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable, map } from 'rxjs';
import { ResponseAccommodationDto } from '../dto/response-station-accommodation.dto';

@Injectable()
export class StationAccommodationResponseTransformInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseAccommodationDto | ResponseAccommodationDto[]> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return data.map((d) => {
            return plainToInstance(ResponseAccommodationDto, d, {
              excludeExtraneousValues: true,
            });
          });
        } else {
          return plainToInstance(ResponseAccommodationDto, data, {
            excludeExtraneousValues: true,
          });
        }
      }),
    );
  }
}
