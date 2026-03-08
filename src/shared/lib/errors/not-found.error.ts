import { BaseError } from "./base.error";

export class NotFoundError extends BaseError {
  readonly statusCode = 404;
  readonly errorCode = "RESOURCE_NOT_FOUND";

  constructor(resourceType: string, resourceId: string) {
    super(`${resourceType} with id ${resourceId} not found`, {
      resourceType,
      resourceId,
    });
  }
}
