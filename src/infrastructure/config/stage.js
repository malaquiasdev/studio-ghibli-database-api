function getStage() {
  if (process.env.NODE_ENV === 'production') {
    return 'prd';
  }
  return 'dev';
}

module.exports = getStage;
