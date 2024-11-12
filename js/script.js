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
