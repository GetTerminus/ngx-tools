const baseConfig = require('./jest.base.config');


module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    '<rootDir>/ngx-tools/testing/**/!(public-api|index).ts',
    '!<rootDir>/ngx-tools/testing/**/*.mock.ts',
  ],
  coverageDirectory: '<rootDir>/coverage/testing/',
  testMatch: [
    '<rootDir>/ngx-tools/testing/**/?(*.)spec.ts?(x)',
  ],
}
