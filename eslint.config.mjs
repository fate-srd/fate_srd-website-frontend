import nextVitals from 'eslint-config-next/core-web-vitals';

export default [
  ...nextVitals,
  {
    rules: {
      'react/no-danger': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
    languageOptions: {
      globals: {
        Drupal: 'readonly',
      },
    },
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'node_modules/**',
      'public/downloads/**',
    ],
  },
];
