module.exports = {
  rootDir: './../',
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/ngx-tools/**/!(public-api|index).ts',
    '!<rootDir>/ngx-tools/**/*.mock.ts',
    '!<rootDir>/ngx-tools/**/testing/**/*',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  globals: {
    'ts-jest': {
      astTransformers: [require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer')],
      diagnostics: false,
      ignoreCoverageForAllDecorators: true,
      stringifyContentPathRegex: '\\.html$',
      tsConfig: '<rootDir>/ngx-tools/tsconfig.spec.json',
    },
  },
  moduleFileExtensions: [
    'html',
    'js',
    'ts',
  ],
  moduleNameMapper: { '^@terminus/ngx-tools(.*)$': '<rootDir>/ngx-tools$1/src/public-api.ts' },
  preset: 'jest-preset-angular',
  reporters: ['default'],
  roots: ['<rootDir>/ngx-tools/'],
  setupFilesAfterEnv: ['<rootDir>/tools/jest-setup.ts'],
  snapshotSerializers: [
    'jest-preset-angular/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
  testMatch: [
    '<rootDir>/**/?(*.)spec.ts?(x)',
  ],
  transform: { '^.+\\.(ts|js|html)$': 'ts-jest' },
  transformIgnorePatterns: [
    'node_modules/(?!@ngrx)',
  ],
};
