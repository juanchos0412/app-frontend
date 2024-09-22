/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DuOnOg-Q.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CySQIoDg.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto", "data-astro-cid-2mxdoeuz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="contact-container" data-astro-cid-2mxdoeuz> <h1 data-astro-cid-2mxdoeuz>Contáctanos</h1> <p data-astro-cid-2mxdoeuz>Si tienes alguna pregunta o necesitas más información, no dudes en enviarnos un mensaje.</p> <form class="contact-form" id="contact-form" data-astro-cid-2mxdoeuz> <label for="name" data-astro-cid-2mxdoeuz>Nombre:</label> <input type="text" id="name" name="name" placeholder="Tu nombre" required data-astro-cid-2mxdoeuz> <label for="email" data-astro-cid-2mxdoeuz>Correo electrónico:</label> <input type="email" id="email" name="email" placeholder="Tu correo" required data-astro-cid-2mxdoeuz> <label for="subject" data-astro-cid-2mxdoeuz>Asunto:</label> <input type="text" id="subject" name="subject" placeholder="Asunto" required data-astro-cid-2mxdoeuz> <label for="message" data-astro-cid-2mxdoeuz>Mensaje:</label> <textarea id="message" name="message" rows="5" placeholder="Escribe tu mensaje" required data-astro-cid-2mxdoeuz></textarea> <button type="submit" class="submit-button" data-astro-cid-2mxdoeuz>Enviar</button> </form> </div> ` })} `;
}, "/home/user/app-frontend/src/pages/contacto.astro", void 0);

const $$file = "/home/user/app-frontend/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacto,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
