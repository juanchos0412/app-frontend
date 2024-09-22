/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DuOnOg-Q.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CySQIoDg.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$UpdatePass = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Actualizaci\xF3n del Password", "data-astro-cid-iehuxp52": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="update-container" data-astro-cid-iehuxp52> <h1 data-astro-cid-iehuxp52>Actualiza tú Password</h1> <p data-astro-cid-iehuxp52>Ingrese su nueva contraseña en el campo que aparece a continuación. Asegúrese de no utilizar su contraseña actual.</p> <form data-astro-cid-iehuxp52> <label for="new-password" data-astro-cid-iehuxp52>Nuevo Password</label> <input type="password" id="new-password" name="new-password" required data-astro-cid-iehuxp52> <button type="submit" data-astro-cid-iehuxp52>Actualizar</button> </form> </div> ` })} `;
}, "/home/user/app-frontend/src/pages/auth/update-pass.astro", void 0);

const $$file = "/home/user/app-frontend/src/pages/auth/update-pass.astro";
const $$url = "/auth/update-pass";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$UpdatePass,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
