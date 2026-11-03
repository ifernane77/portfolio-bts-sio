const boutonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");

boutonMenu.addEventListener("click", function () {
    const estOuvert = menu.classList.toggle("ouvert");

    boutonMenu.setAttribute("aria-expanded", estOuvert);
});