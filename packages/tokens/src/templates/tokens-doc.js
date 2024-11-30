export const primitiveDocFormatter = () =>
  `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Hollow Design Tokens - Primitives</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
      <div class="header">
        <h1 class="header_title">Primitive tokens</h1>
      </div>
      <div class="pallet-container">
      </div>
    </body>
  </html>`;

export const themeDocFormatter = (sd) =>
  `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Hollow Design Tokens - Themes</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
      <div class="header">
        <h1 class="header_title">Theme: ${sd.options.theme}</h1>
      </div>
      <div class="pallet-container">
      </div>
    </body>
  </html>`;