module.exports = {
  extends: ['@terminus/eslint-config-frontend/development'],
  parserOptions: {
    ecmaVersion: 6,
    project: './tsconfig.json',
    sourceType: 'module'
  },
  overrides: [
    {
      files: [
        '**/*.spec.ts',
        '**/*.mock.ts'
      ],
      env: {
        jest: true,
      },
    },
  ],
}
