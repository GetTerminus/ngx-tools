const baseConfig = require('./jest.base.config');


module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    '<rootDir>/ngx-tools/regex/**/!(public-api|index).ts',
  ],
  coverageDirectory: '<rootDir>/coverage/regex/',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/coverage/regex/',
        outputName: 'report.xml',
      },
    ],
  ],
  testMatch: [
    '<rootDir>/ngx-tools/regex/**/?(*.)spec.ts?(x)',
  ],
};
