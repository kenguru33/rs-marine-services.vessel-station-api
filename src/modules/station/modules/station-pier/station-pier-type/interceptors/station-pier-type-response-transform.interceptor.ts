import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable, map } from 'rxjs';
import { ResponseStationPierTypeDto } from '../dto/response-pier-type.dto';

@Injectable()
export class StationPierTypeResponseTransformInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseStationPierTypeDto | ResponseStationPierTypeDto[]> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return data.map((d) => {
            return plainToInstance(ResponseStationPierTypeDto, d, {
              excludeExtraneousValues: true,
            });
          });
        } else {
          return plainToInstance(ResponseStationPierTypeDto, data, {
            excludeExtraneousValues: true,
          });
        }
      }),
    );
  }
}
