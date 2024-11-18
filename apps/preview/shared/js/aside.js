import { render } from './render.js';

async function navigate(path) {
  window.history.pushState({}, path, window.location.origin + window.location.pathname + path);
  await render();
}

export function onLoadAside() {
  const route = window.location.hash.slice(1) || '/';

	document.querySelector(`.aside__link[href$="${route}"]`)?.classList.add('active');

  document.querySelectorAll('a[data-link]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      document.querySelector('[data-link].active')?.classList.remove('active');
			e.target?.classList.add('active');
      document.querySelector('.aside').classList.toggle('open');

      navigate(e.target.getAttribute('href'));

      if (document.startViewTransition) {
        document.startViewTransition();
      }
    });
  });


  document.querySelector('#menu-toggle')?.addEventListener('click', () => {
    document.querySelector('.aside').classList.toggle('open');
  });
}
