const baseConfig = require('./jest.base.config');


module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    '<rootDir>/ngx-tools/testing/**/!(public-api|index).ts',
    '!<rootDir>/ngx-tools/testing/**/*.mock.ts',
  ],
  coverageDirectory: '<rootDir>/coverage/testing/',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/coverage/testing/',
        outputName: 'report.xml',
      },
    ],
  ],
  testMatch: [
    '<rootDir>/ngx-tools/testing/**/?(*.)spec.ts?(x)',
  ],
};
