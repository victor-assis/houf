import importPlugin from 'eslint-plugin-import';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import preferArrowPlugin from 'eslint-plugin-prefer-arrow';
import jsxA11YPlugin from 'eslint-plugin-jsx-a11y';
import sonarjsPlugin from 'eslint-plugin-sonarjs';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends('eslint:recommended'),
  {
    plugins: {
      import: fixupPluginRules(importPlugin),
      jsdoc: jsdocPlugin,
      'prefer-arrow': preferArrowPlugin,
      'jsx-a11y': jsxA11YPlugin,
      sonarjs: sonarjsPlugin,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    // settings: {
    //   react: {
    //     pragma: 'React',
    //     version: 'detect',
    //   },
    //   propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
    // },
  },
  ...fixupConfigRules(
    compat.extends(
      // 'plugin:react-hooks/recommended',
      // 'plugin:react/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      // 'plugin:@angular-eslint/recommended',
      // 'plugin:@angular-eslint/template/process-inline-templates',
      'prettier'
    )
  ).map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
  })),
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      'import/no-unresolved': [
        2,
        {
          ignore: [
            '@houf/tools',
            // '@angular/cdk',
            // '@angular/core',
            // '@angular/platform-browser-dynamic',
            'apps/docs/router-component',
          ],
        },
      ],
      'arrow-body-style': 'error',
      'arrow-parens': ['error', 'always'],
      'dot-notation': 'error',
      eqeqeq: ['error', 'smart'],
      'new-parens': 'error',
      'no-bitwise': 'error',
      curly: 'error',
      'guard-for-in': 'error',
      'no-caller': 'error',
      'no-console': [
        'error',
        {
          allow: [
            'log',
            'warn',
            'dir',
            'timeLog',
            'assert',
            'clear',
            'count',
            'countReset',
            'group',
            'groupEnd',
            'table',
            'dirxml',
            'error',
            'groupCollapsed',
            'Console',
            'profile',
            'profileEnd',
            'timeStamp',
            'context',
          ],
        },
      ],
      'no-empty-function': [
        'error',
        {
          allow: ['constructors'],
        },
      ],
      'no-eval': 'error',
      'no-var': 'error',
      'one-var': ['error', 'never'],
      'prefer-const': 'error',
      'no-trailing-spaces': 'error',
      'no-param-reassign': 'error',
      'no-undef-init': 'error',
      'no-restricted-imports': ['error', 'rxjs/Rx'],
      'no-unused-expressions': 'error',
      'no-new-wrappers': 'error',
      'no-return-await': 'error',
      'no-throw-literal': 'error',
      'object-shorthand': 'error',
      quotes: [
        2,
        'single',
        {
          avoidEscape: true,
        },
      ],
      radix: 'error',
      semi: 'error',
      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'],
        },
      ],
      'eol-last': 'error',
      'import/no-deprecated': 'warn',
      // 'import/no-default-export': 'error',
      'import/no-self-import': 'error',
      'import/no-cycle': 'error',
      'import/no-useless-path-segments': 'error',
      'import/order': 'error',
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/newline-after-import': 'error',
    },
  },
  ...compat.extends().map((config) => ({
    ...config,
    files: ['**/*.js', '**/*.jsx'],
  })),
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'no-use-before-define': 'error',
    },
  },
  // ...fixupConfigRules(
  //   compat.extends('plugin:@angular-eslint/recommended')
  // ).map((config) => ({
  //   ...config,
  //   files: ['**/*.ts'],
  // })),
  {
    files: ['**/*.tsx'],
    rules: {
      '@typescript-eslint/default-param-last': ['error'],
      '@typescript-eslint/no-explicit-any': 'error',
      'no-use-before-define': 'error',
      // 'react-hooks/rules-of-hooks': 'error',
    },
  },
  // ...fixupConfigRules(
  //   compat.extends('plugin:@angular-eslint/template/recommended')
  // ).map((config) => ({
  //   ...config,
  //   files: ['**/*.html'],
  // })),
  {
    files: ['**/*.html'],
    rules: {},
  },
];
