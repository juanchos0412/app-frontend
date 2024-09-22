/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DuOnOg-Q.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CySQIoDg.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Singup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign up", "data-astro-cid-kdxkabtv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="signup-container" data-astro-cid-kdxkabtv> <h1 data-astro-cid-kdxkabtv>Sign up</h1> <form data-astro-cid-kdxkabtv> <label for="email" data-astro-cid-kdxkabtv>Email</label> <input type="email" id="email" name="email" required data-astro-cid-kdxkabtv> <label for="nombres" data-astro-cid-kdxkabtv>Nombres</label> <input type="text" id="nombres" name="nombres" required data-astro-cid-kdxkabtv> <label for="password" data-astro-cid-kdxkabtv>Password</label> <input type="password" id="password" name="password" required data-astro-cid-kdxkabtv> <div class="checkbox-container" data-astro-cid-kdxkabtv> <input type="checkbox" id="terms" name="terms" required data-astro-cid-kdxkabtv> <label for="terms" data-astro-cid-kdxkabtv>Al crear una cuenta, acepto la política de privacidad y los términos de servicio de este sitio web.</label> </div> <div class="checkbox-container" data-astro-cid-kdxkabtv> <input type="checkbox" id="marketing" name="marketing" data-astro-cid-kdxkabtv> <label for="marketing" data-astro-cid-kdxkabtv>Doy mi consentimiento para recibir correos electrónicos de marketing.</label> </div> <button type="submit" data-astro-cid-kdxkabtv>Sign Up</button> </form> <p class="login" data-astro-cid-kdxkabtv>¿Ya tienes una cuenta? <a href="#" data-astro-cid-kdxkabtv>Log In</a></p> </div> ` })} `;
}, "/home/user/app-frontend/src/pages/auth/singup.astro", void 0);

const $$file = "/home/user/app-frontend/src/pages/auth/singup.astro";
const $$url = "/auth/singup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Singup,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
