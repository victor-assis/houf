export const fontsCssFormatter = (dictionary) => {
  const formatsMap = {
    woff2: 'woff2',
    woff: 'woff',
    ttf: 'truetype',
    otf: 'opentype',
    svg: 'svg',
    eot: 'embedded-opentype',
  };

  const styleMap = {
    200: 'light',
    300: 'light',
    400: 'regular',
    500: 'medium',
    700: 'bold',
    900: 'xbold',
  };

  return dictionary.allTokens.reduce((fontList, prop) => {
    const { value: { family, weight, archive } } = prop;

    const urls = Object.keys(formatsMap)
      .map(
        (extension) =>
          `url("../assets/fonts/${archive}.${extension}") format("${formatsMap[extension]}")`
      )
      .join(',\n\t\t\t');

    const fontCss = `
@font-face {
  font-family: "${family}";
  font-style: ${styleMap[weight]};
  font-weight: ${weight};
  font-display: swap;
  src: ${urls};
}`;

    if (family) {
      fontList.push(fontCss);
    }

    return fontList;
  }, []).join('\n');
};