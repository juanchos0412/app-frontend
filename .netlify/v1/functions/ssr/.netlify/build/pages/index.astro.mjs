/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DuOnOg-Q.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CySQIoDg.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Poli - Plataforma de Registro", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-j7pv25f6> <div class="logo" data-astro-cid-j7pv25f6>Poli</div> <h1 data-astro-cid-j7pv25f6>Plataforma web que permita el registro de usuarios, la asignación de roles (administrador y visualizador)</h1> <h2 data-astro-cid-j7pv25f6>VERSION INICIAL</h2> <form data-astro-cid-j7pv25f6> <input type="email" placeholder="TU DIRECCIÓN DE EMAIL" required data-astro-cid-j7pv25f6> <button type="submit" data-astro-cid-j7pv25f6>REGISTRARME</button> </form> <div class="login-link" data-astro-cid-j7pv25f6> <a href="#" data-astro-cid-j7pv25f6>Log in</a> </div> </div> ` })} `;
}, "/home/user/app-frontend/src/pages/index.astro", void 0);

const $$file = "/home/user/app-frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
