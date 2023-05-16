import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { ResponseVesselMaintenanceDto } from '../dto/response-vessel-maintenance.dto';

@Injectable()
export class VesselMaintenanceInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseVesselMaintenanceDto | ResponseVesselMaintenanceDto[]> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return plainToInstance(ResponseVesselMaintenanceDto, data, {
            excludeExtraneousValues: true,
          });
        }
        return plainToInstance(ResponseVesselMaintenanceDto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
