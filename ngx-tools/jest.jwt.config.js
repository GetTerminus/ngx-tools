const baseConfig = require('./jest.base.config');


module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    '<rootDir>/ngx-tools/jwt/**/!(public-api|index).ts',
    '!<rootDir>/ngx-tools/jwt/testing/**/*',
  ],
  coverageDirectory: '<rootDir>/coverage/jwt/',
  testMatch: [
    '<rootDir>/ngx-tools/jwt/**/?(*.)spec.ts?(x)',
  ],
}
