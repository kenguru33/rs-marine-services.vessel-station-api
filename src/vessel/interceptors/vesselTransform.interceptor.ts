import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { VesselResponseDto } from '../dto/response/vesselResponse.dto';
import { plainToInstance } from 'class-transformer';
import { VesselWithRelation } from '../vessel.service';

@Injectable()
export class VesselTransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<VesselResponseDto | VesselResponseDto[]> {
    console.log(context.switchToHttp().getRequest().body);
    return next.handle().pipe(
      map((data: VesselWithRelation) => {
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
