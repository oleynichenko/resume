import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Keep in sync with LANGS in src/locales/i18n.js and the routes in src/App.jsx.
const LANGUAGE_ROUTES = ['en', 'ua', 'ru'];
const NESTED_ROUTES = ['portfolio'];

// GitHub Pages has no SPA fallback. A path with no file is served from
// public/404.html with status 404, then the browser follows the meta refresh.
// Link previews keep that 404 and show the URL as broken. Copying the built
// shell to each real route makes those URLs return 200.
function githubPagesSpaRoutes() {
  let outDir = '';
  const routes = [
    ...LANGUAGE_ROUTES,
    ...LANGUAGE_ROUTES.flatMap((lang) =>
      NESTED_ROUTES.map((route) => `${lang}/${route}`),
    ),
  ];

  return {
    name: 'github-pages-spa-routes',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const indexHtml = resolve(outDir, 'index.html');

      for (const route of routes) {
        const routeDir = resolve(outDir, route);
        mkdirSync(routeDir, { recursive: true });
        copyFileSync(indexHtml, resolve(routeDir, 'index.html'));
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), githubPagesSpaRoutes()],
});
