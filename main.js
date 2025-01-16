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

                //window.location.href = "busqueda/index.html";
            }
            else {
                console.log("No se han encontrado resultados");
                console.log(exported_names);

                //window.location.href = "busqueda/index.html";
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




// Separate function to load products from JSON
function loadProducts() {
    const productGrid = document.createElement("div");
    productGrid.className = "product-grid";

    // Fetch the CSV file (products.csv)
    fetch("products.csv")
        .then(response => response.text()) // Leer el CSV como texto
        .then(csvText => {
            const rows = csvText.trim().split("\n"); // Dividir en líneas
            const headers = rows[0].split(";"); // Extraer los encabezados (opcional)

            // Iterar sobre las filas, ignorando la primera (encabezados)
            rows.slice(1).forEach(row => {
                const [title, href, imgSrc, price] = row.split(";"); // Dividir columnas

                // Crear elementos HTML para cada producto
                const productItem = document.createElement("a");
                productItem.href = href;
                productItem.className = "product-item";

                const productImage = document.createElement("img");
                productImage.src = imgSrc;
                productImage.alt = title;
                productImage.className = "product-image";

                const productTitle = document.createElement("h3");
                productTitle.textContent = title;
                productTitle.className = "product-title";

                const productPrice = document.createElement("p");
                productPrice.textContent = price;
                productPrice.className = "product-price";

                productItem.appendChild(productImage);
                productItem.appendChild(productTitle);
                productItem.appendChild(productPrice);
                productGrid.appendChild(productItem);
            });

            // Agregar un elemento "Pronto habrá más"
            const finalItem = document.createElement("a");
            finalItem.className = "product-item";

            const finalTitle = document.createElement("h3");
            finalTitle.textContent = "¡Pronto habrá más!";
            finalTitle.className = "product-title";

            finalItem.appendChild(finalTitle);
            productGrid.appendChild(finalItem);

            document.body.appendChild(productGrid);
        })
        .catch(error => console.log("Error loading CSV:", error));
};

//Función para obtener una lista con todos los nombres de los productos
async function getNameProducts() {
    let names = [];

    // Cargar el archivo CSV
    const response = await fetch("products.csv");
    const csvText = await response.text();

    // Procesar las líneas del CSV
    const rows = csvText.trim().split("\n");

    // Iterar sobre las filas, ignorando la primera línea (encabezados)
    rows.slice(1).forEach(row => {
        const [title] = row.split(";"); // Extraer el primer elemento (nombre del producto)
        names.push(title); // Agregarlo a la lista
    });

    return names; // Devolver los nombres
}

function findSimilarItems(array, searchTerm) {
    return array.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
}