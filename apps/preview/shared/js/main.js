import './load-components.js';

import { render } from './render.js';
import { onLoadThemeToggle } from './theme-toggle.js';
import { onLoadAside } from './aside.js';

render(window.location.pathname);

window.onload = () => {
  onLoadAside();
  onLoadThemeToggle();
}
