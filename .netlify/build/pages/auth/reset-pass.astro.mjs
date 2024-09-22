/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DuOnOg-Q.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CySQIoDg.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$ResetPass = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reinicio del Password", "data-astro-cid-nfmenp2a": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="reset-container" data-astro-cid-nfmenp2a> <h1 data-astro-cid-nfmenp2a>Reinicio del Password</h1> <form data-astro-cid-nfmenp2a> <label for="email" data-astro-cid-nfmenp2a>Email</label> <input type="email" id="email" name="email" required data-astro-cid-nfmenp2a> <button type="submit" data-astro-cid-nfmenp2a>Reinicia Password</button> </form> </div> ` })} `;
}, "/home/user/app-frontend/src/pages/auth/reset-pass.astro", void 0);

const $$file = "/home/user/app-frontend/src/pages/auth/reset-pass.astro";
const $$url = "/auth/reset-pass";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ResetPass,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
