document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const dropdownMenu = document.getElementById("dropdown-menu");

    menuIcon.addEventListener("click", () => {
        // Alterna la clase 'hidden' para mostrar/ocultar el menú
        dropdownMenu.classList.toggle("hidden");
    });

    // Opcional: Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", (event) => {
        if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add("hidden");
        }
    });
});