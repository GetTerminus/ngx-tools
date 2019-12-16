const baseConfig = require('./jest.base.config');


module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    '<rootDir>/ngx-tools/jwt/**/!(public-api|index).ts',
    '!<rootDir>/ngx-tools/jwt/testing/**/*',
  ],
  coverageDirectory: '<rootDir>/coverage/jwt/',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/coverage/jwt/',
        outputName: 'report.xml',
      },
    ],
  ],
  testMatch: [
    '<rootDir>/ngx-tools/jwt/**/?(*.)spec.ts?(x)',
  ],
};
