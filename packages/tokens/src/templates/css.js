import Color from 'tinycolor2';

export const cssFormatter = (dictionary, config) => {
  const fontsArray = new Set();
  let output = '';

  dictionary.allTokens.forEach((token) => {
    if (token.name.includes('textStyle')) {
      fontsArray.add(`@import "../fonts/${token.original.value.family.split(' ').join('-')}.css";`);
    }
  });

  if (fontsArray.size > 0) {
    output += `${Array.from(fontsArray).join('\n')}\n\n`;
  }

  output += `:root:not(class="houf-theme-${config.theme}") {\n`;

  dictionary.allTokens.forEach(({ value, name, attributes }) => {
    if (attributes.category === 'color' && name.includes('gradient') && name.includes('chart')) {
      Object.entries(dictionary.tokens.opacity).forEach(([key, opacity]) => {
        if (key !== 'none' && key !== 'empty') {
          output += `  --${name}_${key}: ${Color(value).setAlpha(opacity.value).toRgbString()};\n`;
        }
      });
    } else {
      output += `  --${name}: ${value};\n`;
    }
  });

  output += `}\n`;

  if (dictionary.allTokens.find(({ darkValue }) => darkValue)) {
    output += `\n[data-theme="dark"] {\n`;

    dictionary.allTokens.forEach(({ darkValue, name, attributes }) => {
      if (darkValue) {
        output += `  --${name}: ${darkValue};\n`;

        if (
          attributes.category === 'color' &&
          name.includes('gradient') &&
          name.includes('chart')
        ) {
          Object.entries(dictionary.tokens.opacity).forEach(([key, opacity]) => {
            if (key !== 'none' && key !== 'empty') {
              output += `  --${name}_${key}: ${Color(darkValue).setAlpha(opacity.value).toRgbString()};\n`;
            }
          });
        }
      }
    });

    output += `}\n`;
  }

  return output;
};