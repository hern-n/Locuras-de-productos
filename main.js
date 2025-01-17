import { loadProducts, getNameProducts, findSimilarItems } from "./functions.js"

document.addEventListener("DOMContentLoaded", () => {
    // Inicializamos con la primera "pantalla"
    initialScreen();
});

function initialScreen() {

    // Limpiar el DOM (en caso de que ya haya contenido)
    document.body.innerHTML = "";


    // Set the document title
    document.title = "Locuras de Productos";

    // Create the options bar
    const optionsBar = document.createElement("div");
    optionsBar.className = "options-bar";

    // Barra de búsqueda
    const searchBar = document.createElement("form");
    searchBar.className = "search-bar";
    searchBar.onsubmit = function (event) {
        event.preventDefault(); // Evitar el envío del formulario
    };

    const input = document.createElement("input");
    input.type = "text";
    input.id = "searchInput";
    input.name = "searchInput";
    input.required = true;
    input.placeholder = "¿Qué quieres empezar a buscar?"; // Texto de ayuda

    input.addEventListener("keydown", async function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evitar comportamiento por defecto

            const names = await getNameProducts(); // Asegurarte de esperar los nombres
            const search_result = findSimilarItems(names, input.value); // Usa input.value directamente
            let exported_names = input.value;

            if (search_result.length > 0) {
                console.log(search_result); // Mostrar resultados
                console.log(exported_names);

                searchScreen();
            }
            else {
                console.log("No se han encontrado resultados");
                console.log(exported_names);

                searchScreen();
            }
        }
    });


    searchBar.appendChild(input);

    const helpButton = document.createElement("a");
    helpButton.href = "ayuda/index.html";
    helpButton.className = "help-button";
    helpButton.textContent = "¿Necesitas\n ayuda?";

    helpButton.addEventListener("mouseover", () => {
        helpButton.classList.add("hover");
    });
    helpButton.addEventListener("mouseout", () => {
        helpButton.classList.remove("hover");
    });

    const logoButton = document.createElement("img");
    logoButton.src = "Logotipo_locuras_de_productos_blanco.png";
    logoButton.alt = "Logotipo Locuras de Productos";
    logoButton.className = "logo-button";

    logoButton.addEventListener("mouseover", () => {
        logoButton.classList.add("hover");
    });
    logoButton.addEventListener("mouseout", () => {
        logoButton.classList.remove("hover");
    });

    // Reorganizar elementos en la barra de opciones
    optionsBar.appendChild(logoButton); // El logo aparece primero
    optionsBar.appendChild(searchBar); // Luego la barra de búsqueda
    optionsBar.appendChild(helpButton); // Finalmente el botón de ayuda
    document.body.appendChild(optionsBar);


    // Create the image container
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    const logoImage = document.createElement("img");
    logoImage.src = "Logotipo_locuras_de_productos.png";
    logoImage.alt = "Logotipo Locuras de Productos";
    logoImage.className = "logo-image";

    logoImage.addEventListener("mouseover", () => {
        logoImage.classList.add("hover");
    });
    logoImage.addEventListener("mouseout", () => {
        logoImage.classList.remove("hover");
    });

    imageContainer.appendChild(logoImage);
    document.body.appendChild(imageContainer);

    // Create the title container
    const titleContainer = document.createElement("div");
    titleContainer.className = "title-container";

    const mainTitle = document.createElement("h1");
    mainTitle.textContent = "Locuras de productos";
    mainTitle.className = "main-title";

    mainTitle.addEventListener("mouseover", () => {
        mainTitle.classList.add("hover");
    });
    mainTitle.addEventListener("mouseout", () => {
        mainTitle.classList.remove("hover");
    });

    const subTitle = document.createElement("h2");
    subTitle.textContent = "¿Qué vas a comprar hoy?";
    subTitle.className = "sub-title";

    titleContainer.appendChild(mainTitle);
    titleContainer.appendChild(subTitle);
    document.body.appendChild(titleContainer);

    // Call the function to load products
    loadProducts();
};

function searchScreen() {
    // Limpiar el DOM (en caso de que ya haya contenido)
    document.body.innerHTML = "";

    // Establecer el título del documento
    document.title = "Buscador de Productos";

    // Crear la barra de opciones
    const optionsBar = document.createElement("div");
    optionsBar.className = "options-bar";

    // Crear el link del logo - botón
    const logoLink = document.createElement("a");
    logoLink.href = "http://www.locurasdeproductos.es";

    // Crear el logo (la imagen)
    const logoButton = document.createElement("img");
    logoButton.src = "Logotipo_locuras_de_productos_blanco.png";
    logoButton.alt = "Logotipo Locuras de Productos";
    logoButton.className = "logo-button";

    // Añadir eventos para hover
    logoButton.addEventListener("mouseover", () => {
        logoButton.classList.add("hover");
    });
    logoButton.addEventListener("mouseout", () => {
        logoButton.classList.remove("hover");
    });

    logoLink.appendChild(logoButton);
    optionsBar.appendChild(logoLink);
    document.body.appendChild(optionsBar);

    //DE momento, no hay productos disonobles, mensaje ara los que se encuentren esta pantalla
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    const maintenanceText = document.createElement("h1");
    maintenanceText.textContent = "De momento esta sección no está acabada. Cuando la acabemos, pordás ver aquí los resultados de tu bésqueda. ;)";
    maintenanceText.className = "main-title"; // Corregido el uso de la clase

    imageContainer.appendChild(maintenanceText);
    document.body.appendChild(imageContainer);
}
