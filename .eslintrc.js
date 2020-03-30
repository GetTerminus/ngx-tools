const SEVERITY = 'error';
const DISABLED = 'off';


module.exports = {
  root: true,
  extends: ['@terminus/eslint-config-frontend'],
  parserOptions: {
    ecmaFeatures: {
      'modules': true,
    },
    ecmaVersion: '2018',
    project: 'tsconfig.all.json',
    sourceType: 'module',
  },
  rules: {
    'jsdoc/require-jsdoc': SEVERITY,
  },
  overrides: [
    // TypeScript and Angular specific rules
    {
      files: ['*.ts'],
      rules: {
        // For performance, prefer OnPush
        '@angular-eslint/prefer-on-push-component-change-detection': SEVERITY,
      },
    },

    // Test helper files
    {
      'files': [
        '**/*.spec.ts',
        '**/*.mock.ts',
        '**/test-helpers.ts',
        '**/test-components.ts',
      ],
      'rules': {
        '@angular-eslint/prefer-on-push-component-change-detection': DISABLED,
      },
    },

    // Demo project
    {
      files: [
        'demo/**/*.ts',
      ],
      rules: {
        '@angular-eslint/prefer-on-push-component-change-detection': DISABLED,
        '@typescript-eslint/explicit-member-accessibility': DISABLED,
        '@typescript-eslint/member-ordering': DISABLED,
        '@typescript-eslint/no-explicit-any': DISABLED,
        '@typescript-eslint/no-magic-numbers': DISABLED,
        '@typescript-eslint/no-non-null-assertion': DISABLED,
        'no-console': DISABLED,
        'jsdoc/require-jsdoc': DISABLED,
      },
    },
  ],
};
