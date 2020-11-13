module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/modules/*/service/*.js'],
};
