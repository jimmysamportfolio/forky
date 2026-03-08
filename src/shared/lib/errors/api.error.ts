import { BaseError } from "./base.error";

export class ApiError extends BaseError {
  readonly statusCode: number;
  readonly errorCode: string;

  constructor(
    statusCode: number,
    errorCode: string,
    message: string,
    details?: Record<string, unknown>
  ) {
    super(message, details);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}
