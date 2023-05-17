import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { ResponseVesselClassDto } from '../dto/response-vessel-class.dto';

@Injectable()
export class VesselClassTransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseVesselClassDto | ResponseVesselClassDto[]> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return plainToInstance(ResponseVesselClassDto, data, {
            excludeExtraneousValues: true,
          });
        }
        return plainToInstance(ResponseVesselClassDto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
