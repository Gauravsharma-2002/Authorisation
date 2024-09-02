class ApiError extends Error {
  constructor(
    statusCode,
    message = "things are wrong",
    error = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.sucess = false;
    this.error = error;
    stack
      ? (this.stack = stack)
      : Error.captureStackTrace(this, this.constructor);
  }
}

export { ApiError };
