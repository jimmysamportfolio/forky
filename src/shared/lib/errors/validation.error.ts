import type { z } from "zod/v4";
import type { APIError } from "../api";
import { BaseError } from "./base.error";

export interface ValidationIssue {
  path: (string | number)[];
  message: string;
}

export class ValidationError extends BaseError {
  readonly statusCode = 400;
  readonly errorCode = "VALIDATION_FAILED";
  readonly issues: ValidationIssue[];

  constructor(message: string, issues: ValidationIssue[]) {
    super(message);
    this.issues = issues;
  }

  static fromZod(zodError: z.ZodError): ValidationError {
    const issues = zodError.issues.map((issue) => ({
      path: issue.path.filter(
        (segment): segment is string | number => typeof segment !== "symbol"
      ),
      message: issue.message,
    }));

    return new ValidationError("Validation failed", issues);
  }

  override toAPIError(): APIError {
    return {
      ...super.toAPIError(),
      details: {
        ...this.details,
        issues: this.issues,
      },
    };
  }
}
