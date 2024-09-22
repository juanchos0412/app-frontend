/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DuOnOg-Q.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CySQIoDg.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Denied = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Acceso denegado", "data-astro-cid-rvzmxau6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="access-denied-container" data-astro-cid-rvzmxau6> <div class="lock-icon" data-astro-cid-rvzmxau6>🔒</div> <h1 data-astro-cid-rvzmxau6>Acceso denegado</h1> <p data-astro-cid-rvzmxau6>
Para ver esta página es necesario ser miembro del sitio. Por favor
<a href="/signup" data-astro-cid-rvzmxau6>Sign up</a> o <a href="/login" data-astro-cid-rvzmxau6>Log in</a>.
</p> </div> ` })} `;
}, "/home/user/app-frontend/src/pages/auth/denied.astro", void 0);

const $$file = "/home/user/app-frontend/src/pages/auth/denied.astro";
const $$url = "/auth/denied";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Denied,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
