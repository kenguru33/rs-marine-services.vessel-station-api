import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { ResponseVesselStateDto } from '../dto/response-vessel-state.dto';

@Injectable()
export class VesselStateResponseTransformInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseVesselStateDto | ResponseVesselStateDto[]> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return plainToInstance(ResponseVesselStateDto, data, {
            excludeExtraneousValues: true,
          });
        }
        return plainToInstance(ResponseVesselStateDto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
