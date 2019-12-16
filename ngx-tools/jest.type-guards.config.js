const baseConfig = require('./jest.base.config');


module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    '<rootDir>/ngx-tools/type-guards/**/!(public-api|index).ts',
  ],
  coverageDirectory: '<rootDir>/coverage/type-guards/',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/coverage/type-guards/',
        outputName: 'report.xml',
      },
    ],
  ],
  testMatch: [
    '<rootDir>/ngx-tools/type-guards/**/?(*.)spec.ts?(x)',
  ],
};
