// Selecciona el elemento de navegación utilizando su ID
const nav = document.querySelector("#nav");
// Selecciona el botón que abre el menú utilizando su ID
const abrir = document.querySelector("#abrir");
// Selecciona el botón que cierra el menú utilizando su ID
const cerrar = document.querySelector("#cerrar");

// Añade un evento de clic al botón "abrir"
abrir.addEventListener("click", () => {
    // Agrega la clase "visible" al elemento de navegación para mostrarlo
    nav.classList.add("visible");
});

// Añade un evento de clic al botón "cerrar"
cerrar.addEventListener("click", () => {
    // Elimina la clase "visible" del elemento de navegación para ocultarlo
    nav.classList.remove("visible");
});
