import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { VesselWithRelation } from '../vessel.service';
import { ResponseVesselDto } from '../dto/response-vessel.dto';

@Injectable()
export class VesselResponseTransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseVesselDto | ResponseVesselDto[]> {
    return next.handle().pipe(
      map((data: VesselWithRelation) => {
        if (data instanceof Array) {
          return plainToInstance(ResponseVesselDto, data, {
            excludeExtraneousValues: true,
          });
        }
        return plainToInstance(ResponseVesselDto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}