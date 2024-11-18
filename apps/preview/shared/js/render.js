import { routes } from "./routes";

const app = document.getElementById('app');

export async function render() {
  const hash = window.location.hash.slice(1) || '';
  const page = routes[hash.replace(/^\//, "")];

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