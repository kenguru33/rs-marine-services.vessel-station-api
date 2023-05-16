import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { ResponseVesselInspectorDto } from '../dto/response-vessel-inspector.dto';

@Injectable()
export class VesselInspectorTransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseVesselInspectorDto | ResponseVesselInspectorDto[]> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return plainToInstance(ResponseVesselInspectorDto, data, {
            excludeExtraneousValues: true,
          });
        }
        return plainToInstance(ResponseVesselInspectorDto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
