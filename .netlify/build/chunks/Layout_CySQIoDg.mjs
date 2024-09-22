import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderHead, f as renderSlot, b as createAstro } from './astro/server_DuOnOg-Q.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <header class="nav"> <a href="/">Home</a> <a href="/contacto">Contactarnos</a> <a href="/admin">Admin</a> <a href="/cuenta">👤</a> </header> ${renderSlot($$result, $$slots["default"])} <footer> <p> &copy 2024 Poli - Plataforma de Registro</p> <h3>Vistas de autenticación (esta sección será eliminada en la proxima entrega)</h3> <div class="enlaces"> <a href="/auth/login">Log In</a> <a href="/auth/singup">Sing Up</a> <a href="/auth/reset-pass">Reset Password</a> <a href="/auth/update-pass">Update Password</a> <a href="/auth/denied">Acceso Denegado</a> <a href="/auth/protected">Vista Protegida</a> </div> </footer> </body></html>`;
}, "/home/user/app-frontend/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
