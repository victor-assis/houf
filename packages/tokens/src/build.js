import StyleDictionary from 'style-dictionary';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

import { transforms, transformGroups } from './transforms.js';
import { formats } from './formats.js';
import { actions } from './actions.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Captura argumentos no terminal e filtra tema e plataforma
/**
 * @example "npm run build:tokens theme=white platform=js"
 */
// const themeArg = process.argv.find(arg => arg.includes('theme=')).replace('theme=', '');
// const platformArg = process.argv.find(arg => arg.includes('platform=')).replace('platform=', '');
const themeArg = '';
const platformArg = '';

// Loop para registrar os `transforms`, `transformGroup`, `format` e `actions`
transforms.forEach(transformer => StyleDictionary.registerTransform(transformer));
transformGroups.forEach(transformGroup => StyleDictionary.registerTransformGroup(transformGroup));
formats.forEach(format => StyleDictionary.registerFormat(format));
actions.forEach(action => StyleDictionary.registerAction(action));

// Obtém todos os temas de tokens
const themes = fs
  .readdirSync(`${__dirname}/tokens/themes/`)
  .filter(t => fs.statSync(path.join(`${__dirname}/tokens/themes/`, t)).isDirectory());

const tokensSource = theme => [
  `${__dirname}/tokens/themes/${theme}/**/*.json`,
  `${__dirname}/tokens/foundation/**/*.json`
];

// Configuração para os outputs das determinadas linguagens
const getConfig = theme => {
  return {
    source: tokensSource(theme),
    platforms: {
      css_scss: {
        prefix: 'houf',
        transformGroup: 'customCss',
        buildPath: `dist/tokens/${theme}/`,
        files: [
          {
            destination: 'tokens.css',
            format: 'custom/css',
            options: {
              selector: `:root[class*="houf-theme-${theme}"]`,
              theme
            },
            filter: token => token.theme === theme
          },
          {
            destination: 'tokens.scss',
            format: 'custom/scss',
            filter: token => token.theme === theme,
            options: {
              theme
            },
          },
          {
            destination: '../tokens.scss',
            format: 'custom/scss-ref',
            filter: token => token.theme === theme
          }
        ]
      },
      js: {
        prefix: 'houf',
        transformGroup: 'customJs',
        buildPath: `dist/tokens/${theme}/`,
        files: [
          {
            destination: '../tokens-themes.js',
            format: 'custom/tokens-theme',
            options: {
              themes
            },
          },
          {
            destination: '../tokens-themes.mjs',
            format: 'custom/tokens-theme-esm',
            options: {
              themes
            },
          },
          {
            destination: '../tokens-themes.d.ts',
            format: 'custom/tokens-theme-declarations',
            options: {
              themes
            },
          },
          {
            destination: 'tokens.js',
            format: 'custom/tokens-theme-module-flat',
            filter: token => token.theme === theme
          },
          {
            destination: 'tokens.d.ts',
            format: 'typescript/es6-declarations',
            filter: token => token.theme === theme,
            options: {
              showFileHeader: false
            }
          }
        ]
      },
      json: {
        prefix: 'houf',
        buildPath: `dist/tokens/${theme}/`,
        files: [
          {
            destination: '../tokens-themes.json',
            format: 'custom/tokens-theme-json',
            options: {
              themes
            },
          },
          {
            destination: 'tokens.json',
            format: 'json/flat',
            filter: token => token.theme === theme
          }
        ]
      },
      style_guide: {
        transformGroup: 'customStatic',
        buildPath: 'dist/docs/tokens/static/themes/',
        files: [
          {
            destination: `${theme}.html`,
            format: 'custom/theme',
            filter: token => token.theme === theme,
            options: {
              theme
            },
          },
        ],
      },
      pallet: {
        transformGroup: 'customStatic',
        buildPath: 'dist/docs/tokens/static/private/',
        files: [
          {
            destination: 'pallet.html',
            format: 'custom/pallet',
            filter: prop => prop.theme,
          },
        ],
      }
    }
  }
};

const buildTypes = ['css_scss', 'js'];

const build = async (sd) => {
  await sd.hasInitialized;

  // Verifica se o usuário determinou uma plataforma para o build
  if (platformArg && buildTypes.includes(platformArg)) {
    sd.buildPlatform(platformArg);
  }

  await sd.buildAllPlatforms();

  // const additionalTokensConfig = {
  //   source: tokensSource('white'),
  //   platforms: {
  //     css_fonts: {
  //       prefix: 'houf',
  //       transformGroup: 'customed',
  //       buildPath: 'dist/tokens/',
  //       files: Object.keys(sd.tokens.text).map(fonts => ({
  //         destination: `fonts/${fonts}.css`,
  //         format: 'custom/fontsCss',
  //         filter: token => token.attributes.category === 'text' && token.attributes.type === fonts,
  //       })),
  //     },
  //   },
  // }

  // await new StyleDictionary(additionalTokensConfig).buildAllPlatforms();
}

// Loop para buildar os temas
// Verifica se o usuário especificou um tema para build
if (themeArg) {
  const sd = new StyleDictionary(getConfig(themeArg));
  console.log(`\nProcessing theme: ${themeArg}`);
  build(sd);
} else {
  themes.forEach(theme => {
    const sd = new StyleDictionary(getConfig(theme));
    console.log(`\nProcessing theme: ${theme}`);
    build(sd);
  });
}