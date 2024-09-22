/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DuOnOg-Q.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CySQIoDg.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Protected = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reinicio del Password", "data-astro-cid-7toyhf24": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="protected-container" data-astro-cid-7toyhf24> <div class="lock-icon" data-astro-cid-7toyhf24>🔒</div> <h1 data-astro-cid-7toyhf24>Página protegida</h1> <form data-astro-cid-7toyhf24> <input type="password" id="password" name="password" placeholder="Password" required data-astro-cid-7toyhf24> <button type="submit" data-astro-cid-7toyhf24>Enviar</button> </form> </div> ` })} `;
}, "/home/user/app-frontend/src/pages/auth/protected.astro", void 0);

const $$file = "/home/user/app-frontend/src/pages/auth/protected.astro";
const $$url = "/auth/protected";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Protected,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
