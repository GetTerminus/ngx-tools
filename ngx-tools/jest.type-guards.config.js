const baseConfig = require('./jest.base.config');


module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    '<rootDir>/ngx-tools/type-guards/**/!(public-api|index).ts',
  ],
  coverageDirectory: '<rootDir>/coverage/type-guards/',
  testMatch: [
    '<rootDir>/ngx-tools/type-guards/**/?(*.)spec.ts?(x)',
  ],
}
