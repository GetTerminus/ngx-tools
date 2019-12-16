const baseConfig = require('./jest.base.config');


module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    '<rootDir>/ngx-tools/coercion/**/!(public-api|index).ts',
  ],
  coverageDirectory: '<rootDir>/coverage/coercion/',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/coverage/coercion/',
        outputName: 'report.xml',
      },
    ],
  ],
  testMatch: [
    '<rootDir>/ngx-tools/coercion/**/?(*.)spec.ts?(x)',
  ],
};
