import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ConflictException,
  ExceptionFilter,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Logger,
  NotFoundException,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    let httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message;

    switch (exception.constructor) {
      case UnauthorizedException:
        message = 'Unauthorized';
        httpStatus = HttpStatus.UNAUTHORIZED;
        break;

      case ForbiddenException:
        message =
          ((exception as ForbiddenException).getResponse() as any).message ||
          'Forbidden';
        httpStatus = HttpStatus.FORBIDDEN;
        break;

      case BadRequestException:
        message = ((exception as BadRequestException).getResponse() as any)
          .message;
        httpStatus = HttpStatus.BAD_REQUEST;
        break;
      case HttpException:
      case ConflictException:
      case NotFoundException:
        message = ((exception as HttpException).getResponse() as any).message;
        break;
      case ServiceUnavailableException:
        message = (
          exception as ServiceUnavailableException
        ).getResponse() as any;
        httpStatus = HttpStatus.SERVICE_UNAVAILABLE;
        break;
      case Error:
        message = (exception as Error).message;
        break;

      default:
        message = 'Internal server error';
        break;
    }

    const responseBody = {
      statusCode: httpStatus,
      message: message,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);

    if (message === 'Internal server error') {
      Logger.error(exception.toString(), 'AllExceptionsFilter');
      // if in development, throw exception to see stack trace
      if (process.env.NODE_ENV !== 'production') throw exception;
    }
  }
}
