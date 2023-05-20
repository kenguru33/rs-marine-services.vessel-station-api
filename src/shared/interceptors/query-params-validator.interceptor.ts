import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class QueryParamsValidatorInterceptor<T> implements NestInterceptor {
  constructor(
    private allowedIncludes: string[],
    private allowedFilters?: string[],
  ) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const query = context.switchToHttp().getRequest().query;

    const { include, ...filter } = query;

    if (include) {
      this.validateIncludes(include.split(','));
    }

    if (filter) {
      this.validateWheres(Object.keys(filter));
    }

    return next.handle();
  }

  private validateIncludes(includes: string[]) {
    includes.forEach((include: string) => {
      if (!this.allowedIncludes.includes(include.trim()))
        throw new BadRequestException(
          `Invalid include value: ${include}. Allowed values are include${
            this.allowedFilters ? ', ' + this.allowedIncludes.join(', ') : ''
          }`,
        );
    });
  }

  private validateWheres(wheres: string[]) {
    wheres.forEach((where: string) => {
      if (!this.allowedFilters?.includes(where.trim()))
        throw new BadRequestException(
          `Invalid query parameter: ${where}. Allowed values are include${
            this.allowedFilters ? ', ' + this.allowedFilters.join(', ') : ''
          }`,
        );
    });
  }
}
