
const boutonTheme = document.querySelector(".theme-toggle");

// Lire le thème enregistré
const themeEnregistre = localStorage.getItem("theme");

// Appliquer le thème enregistré
if (themeEnregistre === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
} else {
    document.documentElement.setAttribute("data-theme", "light");
}

// Mettre à jour l'icône et le libellé du bouton
function actualiserBouton() {
    if (!boutonTheme) return;

    const theme = document.documentElement.getAttribute("data-theme");

    if (theme === "dark") {
        boutonTheme.textContent = "☀";
        boutonTheme.setAttribute("aria-label", "Activer le mode clair");
        boutonTheme.title = "Activer le mode clair";
    } else {
        boutonTheme.textContent = "☾";
        boutonTheme.setAttribute("aria-label", "Activer le mode sombre");
        boutonTheme.title = "Activer le mode sombre";
    }
}

actualiserBouton();

// Changer de thème au clic
if (boutonTheme) {
    boutonTheme.addEventListener("click", function () {
        const themeActuel =
            document.documentElement.getAttribute("data-theme");

        const nouveauTheme =
            themeActuel === "dark" ? "light" : "dark";

        document.documentElement.setAttribute(
            "data-theme",
            nouveauTheme
        );

        localStorage.setItem("theme", nouveauTheme);

        actualiserBouton();
    });
}

