module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.spec.json',
      enableTsDiagnostics: true,
    },
    '__TRANSFORM_HTML__': true,
  },
  transform: {
    '^.+\\.(ts|js|html)$': './../node_modules/jest-preset-angular/preprocessor.js',
  },
  testMatch: [
    '<rootDir>/**/?(*.)(spec|test).ts?(x)',
  ],
  moduleFileExtensions: [
    'ts',
    'js',
    'html',
  ],
  transformIgnorePatterns: [
    './../node_modules/(?!@ngrx)',
  ],
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/**/!(public-api|index).ts',
    '!<rootDir>/testing/src/mocks/*.ts',
    '!<rootDir>/**/*.mock.ts',
  ],
  coverageDirectory: '<rootDir>/../coverage/',
  setupTestFrameworkScriptFile: './../tools/jest-setup.ts',
}
