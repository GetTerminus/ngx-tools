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
    '<rootDir>/regex/**/?(*.)(spec|test).ts?(x)',
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
    '<rootDir>/regex/**/!(public-api|index).ts',
  ],
  coverageDirectory: '<rootDir>/../coverage/regex/',
  setupTestFrameworkScriptFile: './../tools/jest-setup.ts',
}
