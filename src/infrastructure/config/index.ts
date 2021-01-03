export default {
  PORT: Number(process.env.PORT || 8080),
  STAGE: process.env.NODE_ENV || "development",
};
