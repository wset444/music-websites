module.exports = {
  env: {
    browser: true,
    node: true,
    es6: false
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'warn',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    eqeqeq: 'error',
    'react/jsx-uses-react': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'warn'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-unused-vars': 'off'
      }
    }
  ]
};
