const baseConfig = require('./jest.base.config');


module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    '<rootDir>/ngx-tools/utilities/**/!(public-api|index).ts',
  ],
  coverageDirectory: '<rootDir>/coverage/utilities/',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/coverage/utilities/',
        outputName: 'report.xml',
      },
    ],
  ],
  testMatch: [
    '<rootDir>/ngx-tools/utilities/**/?(*.)spec.ts?(x)',
  ],
};
