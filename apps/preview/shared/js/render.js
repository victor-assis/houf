import { routes } from "./routes";

const app = document.getElementById('app');

export function render2() {
  console.log('Função render exportada');
}

export async function render(path) {
  const page = routes[path];
  if (page) {
    try {
      const response = await fetch(page);
      const html = await response.text();
      app.innerHTML = html;
    } catch (error) {
      console.error(`Error loading ${page}:`, error);
      app.innerHTML = '<h1>Error loading page</h1>';
    }
  } else {
    app.innerHTML = '<h1>404 - Page Not Found</h1>';
  }
}