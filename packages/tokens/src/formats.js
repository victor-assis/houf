import { cssFormatter } from './templates/css.js';
import { fontsCssFormatter } from './templates/fonts.js';
import { scssFormatter, scssFormatterRef } from './templates/scss.js';
import { primitiveDocFormatter, themeDocFormatter } from './templates/tokens-doc.js';
import { jsModuleFlatFormatter, jsThemesFormatter, tsFormatterRef, jsonThemesFormatter } from './templates/js.js';

/**
 * Objetos com `formats` customizados
 * https://amzn.github.io/style-dictionary/#/formats?id=custom-formats
 */

export const formats = [
  {
    name: 'custom/pallet',
    format: (dictionary) => primitiveDocFormatter(dictionary),
  },
  {
    name: 'custom/theme',
    format: (dictionary) => themeDocFormatter(dictionary),
  },
  {
    name: 'custom/scss-ref',
    format: (dictionary) => scssFormatterRef(dictionary),
  },
  {
    name: 'custom/scss',
    format: (dictionary) => scssFormatter(dictionary),
  },
  {
    name: 'custom/css',
    format: ({ dictionary, options }) => cssFormatter(dictionary, options),
  },
  {
    name: 'custom/fontsCss',
    format: ({ dictionary }) => fontsCssFormatter(dictionary),
  },
  {
    name: 'custom/tokens-theme-module-flat',
    format: ({ dictionary }) => jsModuleFlatFormatter(dictionary),
  },
  {
    name: 'custom/tokens-theme',
    format: ({ options }) => jsThemesFormatter(options),
  },
  {
    name: 'custom/tokens-theme-esm',
    format: ({ options }) => jsThemesFormatter(options, 'esm'),
  },
  {
    name: 'custom/tokens-theme-declarations',
    format: ({ options }) => tsFormatterRef(options),
  },
  {
    name: 'custom/tokens-theme-json',
    format: ({ options }) => jsonThemesFormatter(options),
  }
];