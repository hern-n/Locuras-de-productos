import { loadProducts, getNameProducts, findSimilarItems, loadSearchedProducts } from "./functions.js";
import { Analytics } from "@vercel/analytics/react";

// Variables globales
let search_result = [];
let exported_names = "";

// Esperar a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", () => {
    initialScreen();
});

function initialScreen() {
    // Limpiar el DOM
    document.body.innerHTML = "";

    // Título del documento
    document.title = "Locuras de Productos";

    // Barra de opciones
    const optionsBar = document.createElement("div");
    optionsBar.className = "options-bar";

    // Logo ( boton en otras páginas)
    const logoButton = document.createElement("img");
    logoButton.src = "Logotipo_locuras_de_productos_blanco.png";
    logoButton.alt = "Logotipo Locuras de Productos";
    logoButton.className = "logo-button";
    addHoverEffect(logoButton);
    optionsBar.appendChild(logoButton);

    // Barra de búsqueda
    const searchBar = createSearchBar();
    optionsBar.appendChild(searchBar);

    // Botón de ayuda
    const helpButton = document.createElement("a");
    helpButton.href = "ayuda/index.html";
    helpButton.className = "help-button";
    helpButton.textContent = "¿Necesitas\n ayuda?";
    addHoverEffect(helpButton);
    optionsBar.appendChild(helpButton);

    document.body.appendChild(optionsBar);

    // Contenedor de imagen principal
    const imageContainer = createImageContainer();
    document.body.appendChild(imageContainer);

    // Título principal
    const titleContainer = createTitleContainer();
    document.body.appendChild(titleContainer);

    // Cargar productos
    loadProducts();
}

function searchScreen() {
    // Limpiar el DOM
    document.body.innerHTML = "";

    // Título del documento
    document.title = "Buscador de Productos";

    // Barra de opciones
    const optionsBar = document.createElement("div");
    optionsBar.className = "options-bar";

    const logoLink = document.createElement("a");
    logoLink.href = "http://www.locurasdeproductos.es";

    const logoButton = document.createElement("img");
    logoButton.src = "Logotipo_locuras_de_productos_blanco.png";
    logoButton.alt = "Logotipo Locuras de Productos";
    logoButton.className = "logo-button";
    addHoverEffect(logoButton);

    logoLink.appendChild(logoButton);
    optionsBar.appendChild(logoLink);
    document.body.appendChild(optionsBar);

    // Mostrar resultados
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    const maintenanceText = document.createElement("h1");
    if (search_result.length > 0) {
        maintenanceText.textContent = `Resultados de búsqueda para "${exported_names}"`;
    } else {
        maintenanceText.textContent = `No se han encontrado resultados para "${exported_names}"`;
    }
    maintenanceText.className = "sub-title";

    imageContainer.appendChild(maintenanceText);
    document.body.appendChild(imageContainer);

    if (search_result.length > 0) {
        loadSearchedProducts(search_result);
    }
}

// Funciones auxiliares
function createSearchBar() {
    const searchBar = document.createElement("form");
    searchBar.className = "search-bar";

    searchBar.onsubmit = function (event) {
        event.preventDefault();
    };

    const input = document.createElement("input");
    input.type = "text";
    input.id = "searchInput";
    input.name = "searchInput";
    input.required = true;
    input.placeholder = "¿Qué quieres empezar a buscar?";

    input.addEventListener("keydown", async function (event) {
        if (event.key === "Enter") {
            event.preventDefault();

            const names = await getNameProducts();
            search_result = findSimilarItems(names, input.value);
            exported_names = input.value;

            searchScreen();
        }
    });

    searchBar.appendChild(input);
    return searchBar;
}

function createImageContainer() {
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    const logoImage = document.createElement("img");
    logoImage.src = "Logotipo_locuras_de_productos.png";
    logoImage.alt = "Logotipo Locuras de Productos";
    logoImage.className = "logo-image";
    addHoverEffect(logoImage);

    imageContainer.appendChild(logoImage);
    return imageContainer;
}

function createTitleContainer() {
    const titleContainer = document.createElement("div");
    titleContainer.className = "title-container";

    const mainTitle = document.createElement("h1");
    mainTitle.textContent = "Locuras de productos";
    mainTitle.className = "main-title";
    addHoverEffect(mainTitle);

    const subTitle = document.createElement("h2");
    subTitle.textContent = "¿Qué vas a comprar hoy?";
    subTitle.className = "sub-title";

    titleContainer.appendChild(mainTitle);
    titleContainer.appendChild(subTitle);
    return titleContainer;
}

function addHoverEffect(element) {
    element.addEventListener("mouseover", () => {
        element.classList.add("hover");
    });
    element.addEventListener("mouseout", () => {
        element.classList.remove("hover");
    });
}
