import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { VesselResponseDto } from '../dto/vesselResponse.dto';
import { Vessel } from '../models/vessel';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class VesselTransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<VesselResponseDto | VesselResponseDto[]> {
    console.log(context.switchToHttp().getRequest().body);
    return next.handle().pipe(
      map((data: Vessel) => {
        if (data instanceof Array) {
          return plainToInstance(VesselResponseDto, data, {
            excludeExtraneousValues: true,
          });
        }
        return plainToInstance(VesselResponseDto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
