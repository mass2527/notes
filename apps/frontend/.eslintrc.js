module.exports = {
  root: true,
  extends: ['custom/react', 'plugin:@tanstack/eslint-plugin-query/recommended'],
  plugins: ['@tanstack/query'],
  rules: {
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/prefer-query-object-syntax': 'error',
  },
  overrides: [
    {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
