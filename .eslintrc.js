module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    'newline-before-return': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'groups': ['builtin', 'external', 'internal', 'parent', ['sibling', 'index', 'object']],
        'pathGroups': [
          { pattern: 'react', group: 'builtin' },
          { pattern: 'next', group: 'builtin' },
          { pattern: 'next/**', group: 'builtin' },
          { pattern: '@/**', group: 'internal' },
        ],
        'pathGroupsExcludedImportTypes': ['react', 'next', 'next/**', '@/**'],
        'alphabetize': { order: 'asc', caseInsensitive: true },
      },
    ],
  },
};
