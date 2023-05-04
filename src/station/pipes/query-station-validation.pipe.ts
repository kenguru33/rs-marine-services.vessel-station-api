import { PipeTransform, BadRequestException } from '@nestjs/common';

export class QueryStationValidationPipe implements PipeTransform {
  transform(value: any) {
    const allowedIncludes = ['type', 'vessels'];
    const allowedWhere = ['type', 'name'];

    const { include, ...where } = value;
    const includes = include?.split(',');
    const wheres = Object.keys(where);
    
    if (includes) {
      const isValid = includes.every((include: string) =>
        allowedIncludes.includes(include),
      );
      if (!isValid) {
        throw new BadRequestException(
          `Invalid include query parameter. Allowed values are ${allowedIncludes.join(
            ', ',
          )}`,
        );
      }
    }

    if (wheres) {
      const isValid = wheres.every((where: string) =>
        allowedWhere.includes(where),
      );
      if (!isValid) {
        throw new BadRequestException(
          `Invalid where query parameter. Allowed values are ${allowedWhere.join(
            ', ',
          )}`,
        );
      }
    }
    return value;
  }
}
