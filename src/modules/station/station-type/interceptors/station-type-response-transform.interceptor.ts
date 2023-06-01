import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable, map } from 'rxjs';
import { ResponseStationTypeDto } from '../dto/response-station-type.dto';

@Injectable()
export class StationTypeResponseTransformInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseStationTypeDto | ResponseStationTypeDto[]> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return data.map((d) => {
            return plainToInstance(ResponseStationTypeDto, d, {
              excludeExtraneousValues: true,
            });
          });
        } else {
          return plainToInstance(ResponseStationTypeDto, data, {
            excludeExtraneousValues: true,
          });
        }
      }),
    );
  }
}
