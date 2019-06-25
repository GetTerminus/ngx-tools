const baseConfig = require('./jest.base.config');


module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    '<rootDir>/ngx-tools/regex/**/!(public-api|index).ts',
  ],
  coverageDirectory: '<rootDir>/coverage/regex/',
  testMatch: [
    '<rootDir>/ngx-tools/regex/**/?(*.)spec.ts?(x)',
  ],
}
