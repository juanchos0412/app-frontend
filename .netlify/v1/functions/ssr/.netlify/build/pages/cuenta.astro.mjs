/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DuOnOg-Q.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CySQIoDg.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Cuenta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cuenta", "data-astro-cid-kxcttix5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="account-container" data-astro-cid-kxcttix5> <h1 data-astro-cid-kxcttix5>Mi cuenta</h1> <form data-astro-cid-kxcttix5> <label for="email" data-astro-cid-kxcttix5>Email</label> <input type="email" id="email" name="email" value="charliedoe@gmail.com" required data-astro-cid-kxcttix5> <label for="nombre" data-astro-cid-kxcttix5>Nombre</label> <input type="text" id="nombre" name="nombre" value="Charlie Doe" required data-astro-cid-kxcttix5> <div class="password-section" data-astro-cid-kxcttix5> <h3 data-astro-cid-kxcttix5>Configuración de contraseña</h3> <a href="#" data-astro-cid-kxcttix5>Reset password</a> </div> <div class="checkbox-container" data-astro-cid-kxcttix5> <input type="checkbox" id="marketing" name="marketing" data-astro-cid-kxcttix5> <label for="marketing" data-astro-cid-kxcttix5>Doy mi consentimiento para recibir correos electrónicos de marketing.</label> </div> <div class="button-container" data-astro-cid-kxcttix5> <button type="submit" data-astro-cid-kxcttix5>Salvar Cambios</button> <button type="button" data-astro-cid-kxcttix5>Cancelar</button> </div> </form> </div> ` })} `;
}, "/home/user/app-frontend/src/pages/cuenta.astro", void 0);

const $$file = "/home/user/app-frontend/src/pages/cuenta.astro";
const $$url = "/cuenta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Cuenta,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
