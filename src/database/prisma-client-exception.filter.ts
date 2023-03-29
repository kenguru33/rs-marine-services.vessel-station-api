import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionsFilter
  extends BaseExceptionFilter
  implements BaseExceptionFilter
{
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.log("ballemann");
    super.catch(exception, host);
  }
}
