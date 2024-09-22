import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_B6ZNi_Fg.mjs';
import { onRequest } from './_noop-middleware.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/auth/denied.astro.mjs');
const _page3 = () => import('./pages/auth/login.astro.mjs');
const _page4 = () => import('./pages/auth/protected.astro.mjs');
const _page5 = () => import('./pages/auth/reset-pass.astro.mjs');
const _page6 = () => import('./pages/auth/singup.astro.mjs');
const _page7 = () => import('./pages/auth/update-pass.astro.mjs');
const _page8 = () => import('./pages/contacto.astro.mjs');
const _page9 = () => import('./pages/cuenta.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin.astro", _page1],
    ["src/pages/auth/denied.astro", _page2],
    ["src/pages/auth/login.astro", _page3],
    ["src/pages/auth/protected.astro", _page4],
    ["src/pages/auth/reset-pass.astro", _page5],
    ["src/pages/auth/singup.astro", _page6],
    ["src/pages/auth/update-pass.astro", _page7],
    ["src/pages/contacto.astro", _page8],
    ["src/pages/cuenta.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "3475ec81-bfec-4e46-bf0e-8838fe9fd200"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
