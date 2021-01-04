function getStage() {
  if (process.env.NODE_ENV === 'production') {
    return 'prd';
  }
  return 'dev';
}

export default {
  PORT: Number(process.env.PORT || 8080),
  STAGE: getStage(),
};
