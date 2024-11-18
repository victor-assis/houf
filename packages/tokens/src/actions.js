import fs from 'fs-extra';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Objetos com 'actions' personalizados
 * https://amzn.github.io/style-dictionary/#/api?id=registeraction
 */

export const actions = [
  {
    name: 'copy_fonts',
    do: async (dictionary, config) => {
      console.log('Copy assets directory');
      await fs.copy(
        `${__dirname}/assets/fonts`,
        `${config.buildPath}assets/fonts`
      );
    },
    undo: async (dictionary, config) => {
      console.log('Cleaning assets directory');
      await fs.remove(`${config.buildPath}assets/fonts`);
    },
  }
];