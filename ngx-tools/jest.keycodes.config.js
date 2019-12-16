const baseConfig = require('./jest.base.config');


module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    '<rootDir>/ngx-tools/keycodes/**/!(public-api|index).ts',
  ],
  coverageDirectory: '<rootDir>/coverage/keycodes/',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/coverage/keycodes/',
        outputName: 'report.xml',
      },
    ],
  ],
  testMatch: [
    '<rootDir>/ngx-tools/keycodes/**/?(*.)spec.ts?(x)',
  ],
};
