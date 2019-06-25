const baseConfig = require('./jest.base.config');


module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    '<rootDir>/ngx-tools/keycodes/**/!(public-api|index).ts',
  ],
  coverageDirectory: '<rootDir>/coverage/keycodes/',
  testMatch: [
    '<rootDir>/ngx-tools/keycodes/**/?(*.)spec.ts?(x)',
  ],
}
