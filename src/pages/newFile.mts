import { editLinks, userNameInput, editFormContainer } from "./admin.astro.0.mts";

editLinks.forEach(link => {
link.addEventListener('click', function (event) {
event.preventDefault();
const userName = this.dataset.user;

// Mostrar el formulario y rellenar el campo de nombre
userNameInput.value = userName;
editFormContainer.classList.remove('hidden');
});
});
