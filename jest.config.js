module.exports = {
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ['<rootDir>/src/**/*.test.js'],
  timers: 'fake',
  clearMocks: true,
  resetMocks: false,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!<rootDir>/src/**/handler.js',
    '!<rootDir>/src/**/config.js',
  ],
  coverageDirectory: './build/cov',
  coverageReporters: ['lcov'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
