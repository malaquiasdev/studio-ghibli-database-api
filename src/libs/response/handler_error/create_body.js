function createBody({ statusCode, code, message, args, requestId }) {
  return {
    error: { statusCode, code, message, args },
    requestId,
  };
}

module.exports = createBody;
