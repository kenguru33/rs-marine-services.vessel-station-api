import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { ResponseVesselCommunicationEquipmentTypeDto } from '../dto/response-vessel-communication-equipment-type';

@Injectable()
export class VesselCommEquipTypeTransformInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<
    | ResponseVesselCommunicationEquipmentTypeDto
    | ResponseVesselCommunicationEquipmentTypeDto[]
  > {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return plainToInstance(
            ResponseVesselCommunicationEquipmentTypeDto,
            data,
            {
              excludeExtraneousValues: true,
            },
          );
        }
        return plainToInstance(
          ResponseVesselCommunicationEquipmentTypeDto,
          data,
          {
            excludeExtraneousValues: true,
          },
        );
      }),
    );
  }
}
