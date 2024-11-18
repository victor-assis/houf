export const transformNameVariable = (theme) =>
  theme.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

const jsonFlat = (dictionary) => {
  let output = '{\n';

  dictionary.allTokens.forEach((token) => {
    output += `  "${token.name}": ${JSON.stringify(token.value)},\n`;
  });

  if (dictionary.allTokens.find(({ darkValue }) => darkValue)) {
    output += '  "darkMode": {\n';
    dictionary.allTokens.forEach((token) => {
      if (token.darkValue) {
        output += `    "${token.name}": ${JSON.stringify(token.darkValue)},\n`;
      }
    });
    output += '  }\n';
    return output;
  }

  output += '}';
  return output;
};

export const jsModuleFlatFormatter = (dictionary) => {
  /**
   * Created by Hollom
   * Do not edit directly. Generated using https://github.com/victor-assis/hollom
   */
  return `module.exports = ${jsonFlat(dictionary)};`;
};

/**
 * Formata temas em módulos JS.
 *
 * @param {Object} file - Arquivo de temas.
 * @param {'cjs' | 'esm'} type - Tipo de módulo JS.
 * @returns {string} - String formatada em JS.
 */
export const jsThemesFormatter = (file, type = 'cjs') => {
  let output = `
/**
 * Created by Hollom
 * Do not edit directly. Generated using https://github.com/victor-assis/Hollom
 */
`;

  output += type === 'cjs' ? 'exports.Themes = {\n' : 'export const Themes = {\n';

  file.themes.forEach((theme) => {
    output += `  ${transformNameVariable(theme)}: "${theme}",\n`;
  });

  output += '};\n';
  return output;
};

export const jsonThemesFormatter = (file) => {
  const output = [];

  file.themes.forEach((theme) => {
    output.push({
      id: theme,
      name: transformNameVariable(theme),
    });
  });

  return JSON.stringify(output, null, 2);
};


export const tsFormatterRef = (file) => {
  let output = `
/**
 * Created by Hollom
 * Do not edit directly. Generated using https://github.com/victor-assis/hollom
 */
`;

  output += 'export const Themes: {\n';
  file.themes.forEach((theme) => {
    output += `  ${transformNameVariable(theme)}: string;\n`;
  });
  output += '};\n';

  return output;
};