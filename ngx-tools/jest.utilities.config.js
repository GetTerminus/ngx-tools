const baseConfig = require('./jest.base.config');


module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    '<rootDir>/ngx-tools/utilities/**/!(public-api|index).ts',
  ],
  coverageDirectory: '<rootDir>/coverage/utilities/',
  testMatch: [
    '<rootDir>/ngx-tools/utilities/**/?(*.)spec.ts?(x)',
  ],
}
