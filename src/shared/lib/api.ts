export interface APIError {
  message: string;
  code: string;
  statusCode: number;
  timestamp: string;
  details?: Record<string, unknown>;
}

export type APIResponse<T> =
  | { success: true; data: T }
  | { success: false; error: APIError };

export function success<T>(data: T): APIResponse<T> {
  return { success: true, data };
}

export function error<T = never>(err: APIError): APIResponse<T> {
  return { success: false, error: err };
}
