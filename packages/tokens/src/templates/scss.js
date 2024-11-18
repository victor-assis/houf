import Color from 'tinycolor2';

export const scssFormatter = (dictionary) => {
  let output = '';

  dictionary.allTokens.forEach(({ value, name, attributes, darkValue }) => {
    if (!darkValue) { output += `$${name}: ${value};\n`; }
    if (darkValue) { output += `$${name}: if(not $darkMode, ${value}, ${darkValue});\n`; }
    if (attributes.category === 'color' && !name.includes('gradient') && dictionary.tokens.opacity) {
      Object.entries(dictionary.tokens.opacity).forEach(([key, opacity]) => {
        if (key !== 'none' && key !== 'empty') {
          if (!darkValue) {
            output += `$${name}_${key}: ${Color(value).setAlpha(opacity.value).toRgbString()};\n`;
          }
          if (darkValue) {
            output += `$${name}_${key}: if(not $darkMode, ${Color(value).setAlpha(opacity.value).toRgbString()}, ${Color(darkValue).setAlpha(opacity.value).toRgbString()});\n`;
          }
        }
      });
    }
  });

  if (dictionary.allTokens.find(({ darkValue }) => darkValue)) {
    output += `$darkMode: false;\n`;
  }

  return output;
};

export const scssFormatterRef = (dictionary) => {
  let output = '';

  dictionary.allTokens.forEach(({ value, name, attributes, theme }) => {

    output += theme === 'no-theme' ?
      `$${name}: ${value};\n` :
      `$${name}: var(--${name}) !default;\n`;

    if (
      attributes.category === 'color' &&
      !name.includes('gradient') &&
      !name.includes('chart') &&
      dictionary.tokens.opacity
    ) {
      Object.entries(dictionary.tokens.opacity).forEach(([key]) => {
        if (key !== 'none' && key !== 'empty') {
          output += `$${name}_${key}: var(--${name}_${key}) !default;\n`;
        }
      });
    }
  });

  return output;
};