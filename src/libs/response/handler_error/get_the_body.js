const createBody = require("./create_body");

function isErrorInstanceofTypeError(error) {
  return error instanceof TypeError;
}

function isErrorNameValidationError(error) {
  return error && error.name === "ValidationError";
}

function isErroCodeConditionalCheckFailedException(error) {
  return error && error.code === "ConditionalCheckFailedException";
}

function getTheCode(err) {
  if (isErrorInstanceofTypeError(err) || isErrorNameValidationError(err)) {
    return "ValidationError";
  }
  return err.code || "internal-error-server";
}

function getTheStatusCode(err) {
  if (isErrorInstanceofTypeError(err) || isErrorNameValidationError(err)) {
    return 400;
  }
  if (isErroCodeConditionalCheckFailedException(err)) {
    return 412;
  }
  return err.statusCode || 500;
}

function getTheMessage(err) {
  return err.message || "OPS! This error do not has a message to you";
}

function getTheBody(err, requestId) {
  return createBody({
    statusCode: getTheStatusCode(err),
    code: getTheCode(err),
    message: getTheMessage(err),
    requestId,
  });
}

module.exports = getTheBody;
