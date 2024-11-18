import { render } from './render.js';

async function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path);
  await render(path);
}

export function onLoadAside() {
	document.querySelector(`.aside__link[href="${window.location.pathname}"]`)?.classList.add('active');

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
