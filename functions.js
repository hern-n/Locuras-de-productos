export function loadProducts() {
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
export async function getNameProducts() {
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

//Función para buscar de un array un elemento
export function findSimilarItems(array, searchTerm) {
    return array.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
}