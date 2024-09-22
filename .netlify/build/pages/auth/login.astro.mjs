/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DuOnOg-Q.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CySQIoDg.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Log in", "data-astro-cid-j7y7d5ql": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="login-container" data-astro-cid-j7y7d5ql> <h1 data-astro-cid-j7y7d5ql>Log in</h1> <form data-astro-cid-j7y7d5ql> <label for="email" data-astro-cid-j7y7d5ql>Email</label> <input type="email" id="email" name="email" required data-astro-cid-j7y7d5ql> <label for="password" data-astro-cid-j7y7d5ql>Password</label> <input type="password" id="password" name="password" required data-astro-cid-j7y7d5ql> <button type="submit" data-astro-cid-j7y7d5ql>Log In</button> </form> <p class="signup" data-astro-cid-j7y7d5ql>¿No tienes una cuenta? <a href="#" data-astro-cid-j7y7d5ql>Sign Up</a></p> </div> ` })} `;
}, "/home/user/app-frontend/src/pages/auth/login.astro", void 0);

const $$file = "/home/user/app-frontend/src/pages/auth/login.astro";
const $$url = "/auth/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
