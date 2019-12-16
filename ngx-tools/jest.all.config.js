const baseConfig = require('./jest.base.config');


module.exports = {
  ...baseConfig,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/coverage/all/',
        outputName: 'report.xml',
      },
    ],
  ],
};
