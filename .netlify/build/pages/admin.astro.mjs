/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DuOnOg-Q.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CySQIoDg.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin", "data-astro-cid-2zp6q64z": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="list-container" data-astro-cid-2zp6q64z> <ul class="user-list" data-astro-cid-2zp6q64z> <li class="user-item" data-astro-cid-2zp6q64z> <span class="user-name" data-astro-cid-2zp6q64z>Grace Chen</span> <div class="container-buttons-list" data-astro-cid-2zp6q64z> <a href="#" class="user-link edit-link" data-user="Grace Chen" data-astro-cid-2zp6q64z>
Grace Chen ⚙️
</a> <a href="#" class="delete" data-astro-cid-2zp6q64z>🗑️</a> </div> </li> <li class="user-item" data-astro-cid-2zp6q64z> <span class="user-name" data-astro-cid-2zp6q64z>Olivia Wang</span> <div class="container-buttons-list" data-astro-cid-2zp6q64z> <a href="#" class="user-link edit-link" data-user="Olivia Wang" data-astro-cid-2zp6q64z>
Olivia Wang ⚙️
</a> <a href="#" class="delete" data-astro-cid-2zp6q64z>🗑️</a> </div> </li> <!-- Agrega más usuarios según sea necesario --> </ul> <!-- Formulario para editar usuario --> <div id="edit-form-container" class="hidden" data-astro-cid-2zp6q64z> <h3 data-astro-cid-2zp6q64z>Edit User</h3> <form id="edit-form" data-astro-cid-2zp6q64z> <label for="user-name" data-astro-cid-2zp6q64z>Name:</label> <input type="text" id="user-name" name="user-name" value="" required data-astro-cid-2zp6q64z> <div class="button-container" data-astro-cid-2zp6q64z> <button type="submit" class="save-button" data-astro-cid-2zp6q64z>Save</button> <button type="button" class="cancel-button" data-astro-cid-2zp6q64z>Cancel</button> </div> </form> </div> <div class="button-container" data-astro-cid-2zp6q64z> <button class="next-button" data-astro-cid-2zp6q64z>Next</button> </div> </div> ` })}  `;
}, "/home/user/app-frontend/src/pages/admin.astro", void 0);

const $$file = "/home/user/app-frontend/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Admin,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
