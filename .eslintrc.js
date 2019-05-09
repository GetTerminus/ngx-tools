module.exports = {
  extends: ['@terminus/eslint-config-frontend/development'],
  parserOptions: {
    ecmaVersion: 6,
    project: './tsconfig.json',
    sourceType: 'module'
  },
  env: {
    jest: true,
  },
}
