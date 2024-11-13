document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const dropdownMenu = document.getElementById("dropdown-menu");

    menuIcon.addEventListener("click", () => {
        dropdownMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", (event) => {
        if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add("hidden");
        }
    });
});
// Obtener el elemento del emoji de la luna llena y el body
const lightModeToggle = document.getElementById('light-mode-toggle');
const body = document.body;

// Agregar un evento al emoji para alternar el modo claro
lightModeToggle.addEventListener('click', () => {
    // Alternar el modo claro en el body
    body.classList.toggle('light-mode');

    // Cambiar el emoji según el modo
    if (body.classList.contains('light-mode')) {
        lightModeToggle.textContent = '🌑'; // Luna nueva para el modo claro
    } else {
        lightModeToggle.textContent = '🌕'; // Luna llena para el modo oscuro
    }

    // Agregar la clase de animación al hacer clic
    lightModeToggle.classList.add('animate-bounce');

    // Eliminar la clase de animación después de 300ms (duración de la animación)
    setTimeout(() => {
        lightModeToggle.classList.remove('animate-bounce');
    }, 300);
});


