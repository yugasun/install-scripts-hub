/**
 * Error handling utilities
 */

export enum ErrorType {
	NETWORK_ERROR = 'NETWORK_ERROR',
	NOT_FOUND = 'NOT_FOUND',
	PARSE_ERROR = 'PARSE_ERROR',
	UNKNOWN = 'UNKNOWN',
}

export interface AppError {
	type: ErrorType;
	message: string;
	details?: unknown;
}
export class ErrorHandler {
  /**
   * Create a standardized AppError
   */
  static createError(type: ErrorType, message: string, details?: unknown): AppError {
    return {
      type,
      message,
      details,
    };
  }

  /**
   * Create error from network/fetch failure
   */
  static networkError(message: string = 'Network request failed', details?: unknown): AppError {
    return this.createError(ErrorType.NETWORK_ERROR, message, details);
  }

  /**
   * Create error for not found resources
   */
  static notFoundError(resource: string = 'Resource'): AppError {
    return this.createError(ErrorType.NOT_FOUND, `${resource} not found`);
  }

  /**
   * Create error for parsing failures
   */
  static parseError(message: string = 'Failed to parse data', details?: unknown): AppError {
    return this.createError(ErrorType.PARSE_ERROR, message, details);
  }

  /**
   * Create unknown error
   */
  static unknownError(error?: unknown): AppError {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    return this.createError(ErrorType.UNKNOWN, message, error);
  }

  /**
   * Convert any error to AppError
   */
  static toAppError(error: unknown): AppError {
    if (this.isAppError(error)) {
      return error;
    }

    if (error instanceof Error) {
      if (error.message.includes('fetch') || error.message.includes('network')) {
        return this.networkError(error.message, error);
      }
      if (error.message.includes('not found')) {
        return this.notFoundError(error.message);
      }
      if (error.message.includes('parse') || error.message.includes('JSON')) {
        return this.parseError(error.message, error);
      }
    }

    return this.unknownError(error);
  }

  /**
   * Type guard for AppError
   */
  static isAppError(error: unknown): error is AppError {
    return (
      typeof error === 'object' &&
      error !== null &&
      'type' in error &&
      'message' in error
    );
  }

  /**
   * Log error to console with formatting
   */
  static logError(error: AppError): void {
    console.error(`[${error.type}] ${error.message}`, error.details);
  }

  /**
   * Get user-friendly error message
   */
  static getUserMessage(error: AppError): string {
    switch (error.type) {
      case ErrorType.NETWORK_ERROR:
        return 'Unable to connect. Please check your internet connection and try again.';
      case ErrorType.NOT_FOUND:
        return error.message;
      case ErrorType.PARSE_ERROR:
        return 'Unable to process the data. Please try again.';
      case ErrorType.UNKNOWN:
      default:
        return 'Something went wrong. Please try again later.';
    }
  }
}
